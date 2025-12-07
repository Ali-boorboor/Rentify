import fetcher from "@/utils/fetcher";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const deleteRequest = async (url: string) => {
  const { response } = await fetcher({ method: "DELETE", url });

  return response;
};

const useDeleteUserProperty = () => {
  return useMutation({
    mutationFn: async (propertyID: string) => {
      return await deleteRequest(`/user-panel/user-properties/${propertyID}`);
    },

    onMutate: () => {
      const id = toast.loading("در حال حذف آگهی...");
      return { id };
    },

    onSuccess: (_, __, context) => {
      toast.success("آگهی شما با موفقیت حذف شد", { id: context.id });
    },

    onError: (_, __, context) => {
      toast.error("خطا هنگام حذف آگهی", { id: context?.id });
    },
  });
};

export default useDeleteUserProperty;
