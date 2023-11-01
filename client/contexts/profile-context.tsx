import { createContext, useContext } from 'react'
import { IUser } from '@/shared/interfaces'

interface IProfileContext {
  user: IUser | undefined
}

export const ProfileContext = createContext<IProfileContext>({
  user: undefined
})

export default function ProfileContextProvider({
  children,
  user
}: {
  children: React.ReactNode
} & IProfileContext) {
  return (
    <ProfileContext.Provider value={{ user }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => {
  const { user } = useContext(ProfileContext)

  if (user === undefined) {
    throw 'useProfileContext must be used with ProfileContextProvider'
  }

  return { user }
}
