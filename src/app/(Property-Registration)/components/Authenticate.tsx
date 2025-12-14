"use client";

import useAuthenticate from "@/hook/useAuthenticate";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const Authenticate = () => {
  const router = useRouter();

  const { data, isPending } = useAuthenticate();

  useEffect(() => {
    if (isPending) return;

    if (data?.status !== 200) {
      router.replace("/login-register");

      toast.warning("لطفا ابتدا ورود کنید سپس برای ثبت آگهی اقدام کنید");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Authenticate;
