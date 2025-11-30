import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const putRequest = async (url: string, body: FormData) => {
  const { response } = await fetcher({
    method: "PUT",
    body,
    url,
  });

  return response;
};

const useEditUserInfos = () => {
  return useMutation({
    mutationFn: async (body: FormData) => {
      return await putRequest("/user-panel/edit-infos", body);
    },

    onSuccess: () => {
      toast.success("اطلاعات شما با موفقیت ویرایش شد");
    },

    onError: () => {
      toast.error("خطا هنگام ویرایش اطلاعات");
    },
  });
};

export default useEditUserInfos;
