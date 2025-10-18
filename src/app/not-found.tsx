import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <>
      <Header />

      <main className="bg-card border shadow-sm rounded-xl flex flex-col justify-center items-center gap-6 p-4 m-auto container h-[60svh]">
        <div className="relative w-full h-60 md:w-xl md:h-96">
          <Image
            className="w-auto object-contain object-center"
            src="/images/png/not-found-image.png"
            alt="not found image"
            sizes="576px"
            fill
          />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-xl md:text-2xl font-bold">
            صفحه‌ی مورد نظر یافت نشد!
          </h1>

          <p className="font-normal">
            این صفحه در رنتی‌فای یافت نشد. لطفا به صفحه اصلی مراجعه کنید تا
            املاک مورد نظر خود را پیدا کنید
          </p>

          <Button>بازگشت به صفحه اصلی</Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
