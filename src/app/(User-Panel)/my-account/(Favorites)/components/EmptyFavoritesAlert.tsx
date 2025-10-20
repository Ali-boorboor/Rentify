import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const EmptyFavoritesAlert = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center">
      <Image
        className="w-40 h-40 md:w-60 md:h-60 object-contain object-center"
        src="/images/png/user-panel/empty-favorites.png"
        alt="empty favorites image"
        height={300}
        width={300}
      />

      <h3 className="text-xl md:text-2xl font-semibold">
        شما هنوز آگهی‌ای رو ذخیره نکردید!
      </h3>

      <p className="text-sm md:text-base">
        از طریق آیکون «نشان‌کردن» می‌تونید آگهی‌های مورد نظرتون رو در این لیست
        ذخیره کنید.
      </p>

      <Button>
        <Search className="size-5" />
        جستجو کنید
      </Button>
    </div>
  );
};

export default EmptyFavoritesAlert;
