import { useAuthStore } from "@/stores/auth-store";
import useApis from "./use-apis";
import { z } from "zod";

const refreshDataSchema = z.object({
  accessToken: z.string(),
  payload: z.object({
    user: z.object({
      _id: z.string(),
      username: z.string(),
    }),
  }),
});

const useRefreshToken = () => {
  const { privateApi } = useApis();
  const { setAuth, auth } = useAuthStore();

  const refresh = async () => {
    const response = await privateApi.post("/auth/refresh", {});
    const data = refreshDataSchema.parse(response.data);
    setAuth({ user: data.payload.user, accessToken: data.accessToken });
    return data.accessToken;
  };

  return {
    refresh,
  };
};

export default useRefreshToken;
