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

    onSuccess: () => {
      toast.success(
        "آگهی شما با موفقیت ثبت شد و پس از بررسی توسط ادمین به نمایش همه درمیاید"
      );
      router.push("/my-account/my-properties");
    },

    onError: () => {
      toast.error("خطا هنگام ثبت آگهی");
    },
  });
};

export default usePostRequest;
