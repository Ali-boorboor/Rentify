import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const PropertiesSection = () => {
  return (
    <section className="px-4">
      <div className="container m-auto flex flex-col gap-4 md:gap-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          رهن و اجاره آپارتمان در تهران
        </h1>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {[...Array(8)].map((_, index) => (
            <PropertyCard
              key={index}
              title="۷۰ متری‌۲‌خوابه - تهران محمدیه"
              mortgageAmount={4_000_000_000}
              rentAmount={50_000_000}
              location="تهران-الهیه"
              type="apartment"
            />
          ))}
        </div>

        <Button className="m-auto mt-6 md:mt-12">نمایش آگهی‌های بیشتر</Button>
        {/* if datas was loading show => <Button className="m-auto mt-6 md:mt-12" disabled>
          در حال بارگذاری
          <Spinner />
        </Button> */}
      </div>
    </section>
  );
};

export default PropertiesSection;
