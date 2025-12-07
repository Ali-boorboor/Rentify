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

    onMutate: () => {
      const id = toast.loading("در حال لود اطلاعات...");
      return { id };
    },

    onSuccess: (response, _, context) => {
      if ([201, 200].includes(response.status)) {
        toast.success("با موفقیت وارد شدید", { id: context.id });
        router.replace("/");
      } else if (response.status === 401) {
        toast.error("کلمه عبور یا شماره تلفن اشتباه است", { id: context.id });
      } else {
        toast.error("ورود ناموفق", { id: context.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("ورود ناموفق", { id: context?.id });
    },
  });
};

const useOwnerTenantRegistration = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: object) => {
      return await postRequest("/login-register/owner-tenant", body);
    },

    onMutate: () => {
      const id = toast.loading("در حال لود اطلاعات...");
      return { id };
    },

    onSuccess: (response, _, context) => {
      if (response.status === 400) {
        toast.warning(
          "حساب کاربری شما از نوع آژانس املاک است لطفا از طریق فرم آژانس املاک برای ورود اقدام کنید",
          { id: context.id }
        );
      } else if ([201, 200].includes(response.status)) {
        toast.success("با موفقیت وارد شدید", { id: context.id });
        router.replace("/");
      } else if (response.status === 401) {
        toast.error("کلمه عبور یا شماره تلفن اشتباه است", { id: context.id });
      } else {
        toast.error("ورود ناموفق", { id: context.id });
      }
    },

    onError: (_, __, context) => {
      toast.error("ورود ناموفق", { id: context?.id });
    },
  });
};

export { useEstateAgencyRegistration, useOwnerTenantRegistration };
