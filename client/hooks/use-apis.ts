import { api, privateApi } from "@/libs/apis"

const useApis = () => {
  /**
   * Interceptor for privateApi
   */

  return { api, privateApi }
}

export default useApis
