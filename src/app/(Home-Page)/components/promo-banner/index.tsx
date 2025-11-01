import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BANNER = "/images/png/home-page/promo-banner.png";

const PromoBanner = () => {
  return (
    <section className="container mx-auto h-56 md:h-96 flex justify-between items-center gap-6 bg-accent text-accent-foreground rounded-xl px-4 md:pl-0 overflow-hidden shadow-sm">
      <div className="flex flex-col justify-around items-center gap-6 basis-1/2 h-full grow">
        <div className="text-center space-y-2">
          <h6 className="text-lg md:text-2xl font-semibold">
            برای دریافت وام رهن خانه کلیک کنید
          </h6>

          <p className="text-sm md:text-base text-muted-foreground">
            دریافت وام با کم‌ترین بهره و سریع ترین زمان ممکن
          </p>
        </div>

        <Button className="w-56">اطلاعات بیشتر...</Button>
      </div>

      <div className="hidden md:block basis-1/2 h-full">
        <Image
          className="w-full h-full object-cover object-center"
          alt="promo banner"
          src={BANNER}
          height={800}
          width={800}
        />
      </div>
    </section>
  );
};

export default PromoBanner;
