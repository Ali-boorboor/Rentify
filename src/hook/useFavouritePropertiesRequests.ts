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

const useGetFavouriteProperty = (dynamicQueryKey: string) => {
  return useQuery({
    queryKey: ["favourite-property", dynamicQueryKey],

    queryFn: async () => await getRequest("/favourite-property"),
  });
};

export { usePutFavouriteProperties, useGetFavouriteProperty };
