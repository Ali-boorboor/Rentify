import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const deleteRequest = async (url: string) => {
  const { response } = await fetcher({ method: "DELETE", url });

  return response;
};

const useRemoveMessage = () => {
  return useMutation({
    mutationFn: async (messageID: string) => {
      return await deleteRequest(`/admin-panel/contact-messages/${messageID}`);
    },

    onMutate: () => {
      const id = toast.loading("در حال ارسال اطلاعات...");
      return { id };
    },

    onSuccess: (response, __, context) => {
      if (response.status === 200) {
        toast.success("پیام با موفقیت حذف شد", { id: context.id });
      } else {
        toast.error("خطا هنگام حذف پیام", { id: context?.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام حذف پیام", { id: context?.id });
    },
  });
};

export default useRemoveMessage;
