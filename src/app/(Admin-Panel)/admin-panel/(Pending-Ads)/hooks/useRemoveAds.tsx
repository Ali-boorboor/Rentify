import fetcher from "@/utils/fetcher";
import { stringifyJson } from "@/utils/json";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const deleteRequest = async (url: string, body: object) => {
  const { response } = await fetcher({
    body: stringifyJson(body),
    method: "DELETE",
    url,
  });

  return response;
};

const useRemoveAds = () => {
  return useMutation({
    mutationFn: async (body: object) => {
      return await deleteRequest(
        "/admin-panel/pending-ads/remove-pending-ads",
        body
      );
    },

    onMutate: () => {
      const id = toast.loading("در حال ارسال اطلاعات...");
      return { id };
    },

    onSuccess: (response, __, context) => {
      if (response.status === 200) {
        toast.success("آگهی ها با موفقیت حذف شدند", { id: context.id });
      } else {
        toast.error("خطا هنگام حذف آگهی ها", { id: context?.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام حذف آگهی ها", { id: context?.id });
    },
  });
};

export default useRemoveAds;
