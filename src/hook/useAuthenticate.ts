import fetcher from "@/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

const getRequest = async (url: string) => {
  const { response } = await fetcher({ method: "GET", url });

  return response;
};

const useAuthenticate = () => {
  return useQuery({
    queryKey: ["authenticate"],

    queryFn: async () => await getRequest("/authenticate"),
  });
};

export default useAuthenticate;
