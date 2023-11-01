/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { useSocketStore } from "@/stores/socket-store"

import useRefreshToken from "./use-refresh-token"

const useInitSocket = () => {
  const { auth } = useAuthStore((state) => state)
  const { socket, connect, $connect } = useSocketStore((state) => state)
  const { refresh } = useRefreshToken()

  useEffect(() => {
    console.log("Socket has changed")
    if (socket) {
      socket.on("connect", () => {
        console.log("connect", { socket })
        $connect.next()
      })
      socket.on("connect_error", async (err) => {
        try {
          if (err.message.toLowerCase().includes("unauthorized")) {
            const accessToken = await refresh()
            socket.auth = { accessToken }
            socket.connect()
          }
        } catch (err) {
          console.log("connect_error refresh", err)
        }
      })
    }

    return () => {
      if (socket) {
        socket.off("connect")
        socket.off("connect_error")
      }
    }
  }, [socket])

  useEffect(() => {
    console.log("Checking if user is signed in to connect socket")
    if (auth) {
      connect({ accessToken: auth.accessToken })
    }
  }, [])
}

export default useInitSocket
