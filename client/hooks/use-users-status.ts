/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'
import { useSocketStore } from '@/stores'

const useUsersStatus = (userIds: string[] = []) => {
  const { socket } = useSocketStore()
  const [usersStatus, setUsersStatus] = useState<{
    online: string[]
    offline: string[]
  }>({
    offline: [],
    online: []
  })

  useEffect(() => {
    if (!socket) return

    const handleSetUsersStatus = () => {
      socket.emit('users/get-status', { userIds }, (err, res) => {
        if (err) {
          setUsersStatus({ online: [], offline: [] })
          return console.error(err)
        }

        if (res?.payload) {
          setUsersStatus(res.payload)
        }
      })
    }

    handleSetUsersStatus()
    let interval = setInterval(() => {
      handleSetUsersStatus()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [socket, userIds])

  return {
    usersStatus
  }
}

export default useUsersStatus
