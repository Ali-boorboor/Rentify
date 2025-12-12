import fetcher from "@/utils/fetcher";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const putRequest = async (url: string) => {
  const { response } = await fetcher({ method: "PUT", url });

  return response;
};

const getRequest = async (url: string) => {
  const { data } = await fetcher<{ favourites: { properties: string[] } }>({
    method: "GET",
    url,
  });

  return data;
};

const usePutFavouriteProperties = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (propertyID: string) => {
      return await putRequest(`/favourite-property/${propertyID}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourite-property"] });

      router.refresh();
    },
  });
};

const useGetFavouriteProperty = (isUserLoggedIn: boolean) => {
  return useQuery({
    enabled: isUserLoggedIn,

    queryKey: ["favourite-properties"],

    queryFn: async () => await getRequest("/favourite-property"),

    staleTime: 24 * 60 * 60 * 1000,

    gcTime: 24 * 60 * 60 * 1000,

    refetchOnMount: false,

    refetchOnWindowFocus: false,

    refetchOnReconnect: false,
  });
};

export { usePutFavouriteProperties, useGetFavouriteProperty };
