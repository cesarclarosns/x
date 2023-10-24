import useApis from "./use-apis";

interface IFindAllChatsQuery {
  limit: number;
}

const useChatsService = () => {
  const { api, privateApi } = useApis();

  const findOneChat = async () => {};
  const findAllChats = async (query: any) => {};
  const findAllMessages = async () => {};

  return { findOneChat, findAllChats, findAllMessages };
};

export default useChatsService;
