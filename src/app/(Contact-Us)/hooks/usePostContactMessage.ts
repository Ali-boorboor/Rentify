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

    onSuccess: () => {
      toast.success("پیام شما با موفقیت ثبت شد");
    },

    onError: () => {
      toast.error("خطا هنگام ثبت پیام");
    },
  });
};

export default usePostContactMessage;
