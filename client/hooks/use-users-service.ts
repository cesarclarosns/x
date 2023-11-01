import { useApis } from '@/hooks'
import { IUser } from '@/shared/interfaces'
import { useQuery, useQueryClient } from 'react-query'

const useUsersService = () => {
  const queryClient = useQueryClient()
  const { api } = useApis()

  const getUserProfileByUsername = async (username: string): Promise<IUser> => {
    const response = await api.get(`/users/${username}/profile`)
    return response.data
  }

  const updateUser = async (username: string, payload: Partial<IUser>) => {
    const response = await api.put(`/users/${username}`, payload)
    return response
  }

  return { getUserProfileByUsername, updateUser }
}

export default useUsersService
