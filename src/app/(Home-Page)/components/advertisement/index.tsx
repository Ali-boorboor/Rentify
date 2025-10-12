import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Advertisement = () => {
  return (
    <section className="container m-auto h-56 md:h-96 flex justify-between items-center bg-accent text-accent-foreground rounded-xl px-4 mb-40">
      <div className="flex flex-col justify-around items-center gap-4 py-4 basis-1/2 h-full grow">
        <div className="text-center">
          <h6 className="text-lg md:text-2xl font-semibold">
            برای دریافت وام رهن خانه کلیک کنید
          </h6>

          <p className="text-sm md:text-base text-muted-foreground">
            دریافت وام با کم‌ترین بهره و سریع ترین زمان ممکن
          </p>
        </div>

        <Button className="w-56">اطلاعات بیشتر...</Button>
      </div>

      <div className="hidden lg:block basis-1/2 h-full">
        <Image
          className="w-full h-full object-cover object-center"
          src="/images/png/home-page/advertisement.png"
          alt="advertisement image"
          height={800}
          width={800}
        />
      </div>
    </section>
  );
};

export default Advertisement;
