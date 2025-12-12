import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const postRequest = async (url: string, body: FormData) => {
  const { response } = await fetcher({
    method: "POST",
    body,
    url,
  });

  return response;
};

const usePostRequest = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: FormData) => {
      return await postRequest("/property-registration", body);
    },

    onMutate: () => {
      const id = toast.loading("در حال ارسال اطلاعات...");
      return { id };
    },

    onSuccess: (response, __, context) => {
      if (response.status === 201) {
        toast.success(
          "آگهی شما با موفقیت ثبت شد و پس از بررسی توسط ادمین به نمایش همه درمیاید",
          { id: context.id }
        );
        router.push("/my-account/my-properties");
      } else {
        toast.error("خطا هنگام ثبت آگهی", { id: context?.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام ثبت آگهی", { id: context?.id });
    },
  });
};

export default usePostRequest;
