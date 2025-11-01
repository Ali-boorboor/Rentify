import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const EmptyPropertiesAlert = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center">
      <Image
        className="w-40 h-40 md:w-60 md:h-60 object-contain object-center"
        src="/images/png/user-panel/empty-properties.png"
        alt="empty properties image"
        height={300}
        width={300}
      />

      <h3 className="text-xl md:text-2xl font-semibold">
        شما هنوز آگهی‌ای ثبت نکردید!
      </h3>

      <p className="text-sm md:text-base">
        روزانه هزاران مشتری در رنتی‌فای در جستجوی ملک مورد نظرشان هستند
      </p>

      <Button asChild>
        <Link href="/property-registration/property-type">
          <Plus className="size-5" />
          ثبت آگهی رایگان
        </Link>
      </Button>
    </div>
  );
};

export default EmptyPropertiesAlert;
