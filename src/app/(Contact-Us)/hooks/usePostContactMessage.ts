import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { stringifyJson } from "@/utils/json";
import { toast } from "sonner";

const postRequest = async (url: string, body: object) => {
  const { response } = await fetcher({
    body: stringifyJson(body),
    method: "POST",
    url,
  });

  return response;
};

const usePostContactMessage = () => {
  return useMutation({
    mutationFn: async (body: object) => {
      return await postRequest("/contact-us-message", body);
    },

    onMutate: () => {
      const id = toast.loading("در حال ارسال اطلاعات...");
      return { id };
    },

    onSuccess: (response, __, context) => {
      if (response.status === 201) {
        toast.success("پیام شما با موفقیت ثبت شد", { id: context.id });
      } else {
        toast.error("خطا هنگام ثبت پیام", { id: context?.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام ثبت پیام", { id: context?.id });
    },
  });
};

export default usePostContactMessage;
