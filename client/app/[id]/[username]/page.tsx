"use client"

import { notFound } from "next/navigation"

export default function PostPage({
  params
}: {
  params: { id: string; username: string }
}) {
  notFound()

  return (
    <div>
      <p className="font-bold">Post page</p>
      <p>Post ID: {params?.id}</p>
      <p>Username: {params?.username}</p>
    </div>
  )
}
