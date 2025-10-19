import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PropertyMenu = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-between items-center max-w-full sm:max-w-[30rem] border-b">
      <Button variant="link" asChild>
        <Link href="#main-details">اطلاعات اصلی</Link>
      </Button>

      <Button variant="link" asChild>
        <Link href="#equipment-details">تجهیزات و امکانات</Link>
      </Button>

      <Button variant="link" asChild>
        <Link href="#description-details">توضیحات</Link>
      </Button>

      <Button variant="link" asChild>
        <Link href="#location-details">موقعیت مکانی</Link>
      </Button>
    </div>
  );
};

export default PropertyMenu;
