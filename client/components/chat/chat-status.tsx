import { useEffect, useState } from "react"

export default function ChatStatus() {
  const [state, setState] = useState(false)

  useEffect(() => {
    console.log({ state })
    return () => {
      console.log({ state })
    }
  }, [])

  return <>{state ? "Online" : "Offline"}</>
}
