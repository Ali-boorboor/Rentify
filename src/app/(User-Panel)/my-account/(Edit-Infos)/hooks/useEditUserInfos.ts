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

    onMutate: () => {
      const id = toast.loading("در حال ارسال اطلاعات...");
      return { id };
    },

    onSuccess: (response, __, context) => {
      if (response.status === 200) {
        toast.success("اطلاعات شما با موفقیت ویرایش شد", { id: context.id });
      } else {
        toast.error("خطا هنگام ویرایش اطلاعات", { id: context?.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام ویرایش اطلاعات", { id: context?.id });
    },
  });
};

export default useEditUserInfos;
