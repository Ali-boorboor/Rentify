"use client";

import React from "react";
import logoutAction from "@userPanel/server-actions/logoutAction";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Logout = () => {
  const router = useRouter();

  const logoutHandler = async () => {
    const wasLogoutSuccessfull = await logoutAction();

    if (!wasLogoutSuccessfull) {
      toast.error("خطا هنگام خروج");
    } else {
      toast.success("با موفقیت خارج شدید");

      router.replace("/");
    }
  };

  return (
    <Button
      className={cn(
        "grow justify-center md:justify-start text-destructive [&_svg]:stroke-destructive",
        "[&_svg:not([class*='size-'])]:size-5"
      )}
      onClick={logoutHandler}
      variant="link"
    >
      <LogOut />
      <span className="hidden md:inline">خروج از حساب کاربری</span>
    </Button>
  );
};

export default Logout;
