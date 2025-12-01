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

    onSuccess: () => {
      toast.success("آگهی شما با موفقیت حذف شد");
    },

    onError: () => {
      toast.error("خطا هنگام حذف آگهی");
    },
  });
};

export default useDeleteUserProperty;
