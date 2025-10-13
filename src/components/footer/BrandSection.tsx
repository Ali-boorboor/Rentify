import React from "react";
import Image from "next/image";
import MainLogo from "@/components/MainLogo";
import { Separator } from "@/components/ui/separator";
import { socialMedias, enamadBadges } from "@/constants/footerDatas";

const BrandSection = () => {
  return (
    <div className="space-y-4 basis-full md:basis-1/3 flex flex-col items-center md:items-start md:max-w-80">
      <MainLogo className="md:w-40" />

      <p className="text-sm font-normal text-card-foreground text-center sm:text-right">
        در بین آگهی‌های ملکی ثبت شده روزانه جستجو کنید و ملک مورد نظرتان را پیدا
        کنید.
      </p>

      <div className="flex items-center gap-4">
        {socialMedias.map((socialMedia) => (
          <Image
            className="w-6 h-6 object-cover object-center cursor-pointer"
            src={socialMedia.image}
            alt={socialMedia.alt}
            key={socialMedia.id}
            height={30}
            width={30}
          />
        ))}
      </div>

      <Separator />

      <div className="flex flex-wrap items-center justify-center gap-4">
        {enamadBadges.map((enamadBadge) => (
          <Image
            className="w-18 h-18 md:w-24 md:h-24 object-contain object-center"
            src={enamadBadge.image}
            alt={enamadBadge.alt}
            key={enamadBadge.id}
            height={100}
            width={100}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
