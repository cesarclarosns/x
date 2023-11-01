/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from "react"
import { useRefreshToken } from "@/hooks"
import { useAuthStore } from "@/stores/auth-store"
import { useCookies } from "react-cookie"

import Loading from "../loading"

export default function PersistAuth({
  children
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [cookies] = useCookies(["persist"])
  const [persist] = useState(cookies["persist"] || false)
  const { auth } = useAuthStore((state) => state)
  const { refresh } = useRefreshToken()

  useEffect(() => {
    let isMounted = true

    const refreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    if (!auth && persist) {
      refreshToken()
    } else {
      setIsLoading(false)
    }

    return () => {
      isMounted = false
    }
  }, [])

  return isLoading ? <Loading></Loading> : children
}
