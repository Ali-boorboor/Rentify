import React from "react";
import PropertiesGrid from "@/components/ui/PropertiesGrid";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MostViewedProperties = () => {
  return (
    <section className="container m-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">
          پر بازدید ترین‌های هفته‌ی گذشته
        </h3>

        <Button variant="ghost">
          مشاهده همه
          <ArrowLeft className="size-4.5" />
        </Button>
      </div>

      <PropertiesGrid />
    </section>
  );
};

export default MostViewedProperties;
