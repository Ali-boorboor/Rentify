import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const EmptyPropertiesAlert = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center">
      <Image
        className="w-40 h-40 md:w-60 md:h-60 object-contain object-center"
        src="/images/png/user-panel/empty-properties.png"
        alt="empty favorites image"
        height={300}
        width={300}
      />

      <h3 className="text-xl md:text-2xl font-semibold">
        ملکی با این اطلاعات وجود ندارد!
      </h3>

      <p className="text-sm md:text-base">ملکی با این فیلتر یافت نشد</p>

      <Button>
        <Link href="/properties">بازگشت به صفحه املاک</Link>
      </Button>
    </div>
  );
};

export default EmptyPropertiesAlert;
