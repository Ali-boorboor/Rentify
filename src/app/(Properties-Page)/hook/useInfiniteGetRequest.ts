import fetcher from "@/utils/fetcher";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { IProperty } from "@models/Property";
import { toast } from "sonner";

const INITIAL_PAGE_PARAM = 1;
const CACHE_TIME = 86400000;

interface PaginatedResponse {
  properties: IProperty[];
  totalDocuments: number;
  totalPages: number;
  limit: number;
  page: number;
}

const useInfiniteGetRequest = () => {
  const searchParams = useSearchParams();

  const filters: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    filters[key] = value;
  });

  return useInfiniteQuery({
    initialPageParam: INITIAL_PAGE_PARAM,
    queryKey: ["properties", filters],

    queryFn: ({ pageParam = 1 }) => {
      const params = new URLSearchParams({
        ...filters,
        page: String(pageParam),
      });

      return fetcher<PaginatedResponse>({
        url: `/properties?${params.toString()}`,
      });
    },

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.page >= lastPage.data.totalPages) return undefined;
      else return allPages.length + 1;
    },

    refetchOnWindowFocus: false,
    staleTime: CACHE_TIME,
    throwOnError: false,
    gcTime: CACHE_TIME,
    retry: false,

    meta: {
      onError: () => toast.error("خطا هنگام دریافت آگهی ها"),
    },
  });
};

export default useInfiniteGetRequest;
