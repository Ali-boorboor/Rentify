import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface EmptyPropertiesAlertProps {
  linkButtonText?: string;
  description?: string;
  linkTo?: string;
  image?: string;
  title?: string;
}

const EmptyPropertiesAlert = ({
  image = "/images/png/empty-properties.png",
  description = "ملکی با این فیلتر یافت نشد",
  title = "ملکی با این اطلاعات وجود ندارد!",
  linkButtonText = "پاک کردن فیلتر ها",
  linkTo = "/properties",
}: EmptyPropertiesAlertProps) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center">
      <Image
        className="w-40 h-40 md:w-60 md:h-60 object-contain object-center"
        alt="empty properties image"
        height={300}
        width={300}
        src={image}
        priority
      />

      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>

      <p className="text-sm md:text-base">{description}</p>

      <Button>
        <Link href={linkTo}>{linkButtonText}</Link>
      </Button>
    </div>
  );
};

export default EmptyPropertiesAlert;
