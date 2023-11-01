import IChat from "@/shared/interfaces/chat.interface"
import IMessage from "@/shared/interfaces/message.interface"

import useApis from "./use-apis"

interface IFindAllChatsQuery {
  limit: number
  skip: number
}

const useChatsService = () => {
  const { api, privateApi } = useApis()

  const createChat = async (): Promise<IChat> => {
    return { id: "", participants: [] }
  }

  const findOneChat = async (): Promise<IChat> => {
    return { id: "", participants: [] }
  }

  const findAllChats = async (query: any): Promise<IChat[]> => {
    return []
  }

  const findAllMessages = async (): Promise<IMessage[]> => {
    return []
  }

  return { findOneChat, findAllChats, findAllMessages }
}

export default useChatsService
