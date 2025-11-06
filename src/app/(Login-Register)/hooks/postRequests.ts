import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { stringifyJson } from "@/utils/json";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const postRequest = async (url: string, body: object) => {
  const { response } = await fetcher({
    body: stringifyJson(body),
    method: "POST",
    url,
  });

  return response;
};

const useEstateAgencyRegistration = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: object) => {
      return await postRequest("/login-register/estate-agency", body);
    },

    onSuccess: (response) => {
      if ([201, 200].includes(response.status)) {
        toast.success("با موفقیت وارد شدید");
        router.replace("/");
      } else {
        toast.error("ورود ناموفق");
      }
    },

    onError: () => {
      toast.error("ورود ناموفق");
    },
  });
};

const useOwnerTenantRegistration = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: object) => {
      return await postRequest("/login-register/owner-tenant", body);
    },

    onSuccess: (response) => {
      if (response.status === 400) {
        toast.warning(
          "حساب کاربری شما از نوع آژانس املاک است لطفا از طریق فرم آژانس املاک برای ورود اقدام کنید"
        );
      } else if ([201, 200].includes(response.status)) {
        toast.success("با موفقیت وارد شدید");
        router.replace("/");
      } else {
        toast.error("ورود ناموفق");
      }
    },

    onError: () => {
      toast.error("ورود ناموفق");
    },
  });
};

export { useEstateAgencyRegistration, useOwnerTenantRegistration };
