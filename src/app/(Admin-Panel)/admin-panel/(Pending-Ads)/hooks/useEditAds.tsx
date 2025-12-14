import fetcher from "@/utils/fetcher";
import { stringifyJson } from "@/utils/json";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const putRequest = async (url: string, body: object) => {
  const { response } = await fetcher({
    body: stringifyJson(body),
    method: "PUT",
    url,
  });

  return response;
};

const useEditAds = () => {
  return useMutation({
    mutationFn: async (body: object) => {
      return await putRequest(
        "/admin-panel/pending-ads/verify-pending-ads",
        body
      );
    },

    onMutate: () => {
      const id = toast.loading("در حال ارسال اطلاعات...");
      return { id };
    },

    onSuccess: (response, __, context) => {
      if (response.status === 200) {
        toast.success("وضعیت آگهی ها با موفقیت ویرایش شد", { id: context.id });
      } else {
        toast.error("خطا هنگام ویرایش وضعیت آگهی ها", { id: context?.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام ویرایش وضعیت آگهی ها", { id: context?.id });
    },
  });
};

export default useEditAds;
