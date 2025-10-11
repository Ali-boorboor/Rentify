import React from "react";
import { toPersianDigits } from "@/utils/convertNumbers";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PhoneSection = () => {
  const searchParams = useSearchParams();
  const userPhone = searchParams.get("phone");
  const persianPhone = toPersianDigits(userPhone as string);

  return (
    <div className="text-center text-sm md:text-base">
      <p>کد ارسال شده به شماره موبایل {persianPhone} را وارد کنید</p>

      <Button variant="ghost">
        ویرایش شماره موبایل
        <ArrowLeft className="size-4.5" />
      </Button>
    </div>
  );
};

export default PhoneSection;
