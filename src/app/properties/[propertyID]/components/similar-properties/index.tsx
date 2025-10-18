import React from "react";
import PropertiesGrid from "@/components/PropertiesGrid";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SimilarProperties = () => {
  return (
    <section className="px-4 py-10">
      <div className="container m-auto space-y-4 md:space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h4 className="text-lg md:text-2xl font-semibold">
            خانه هایی با ارزش مشابه
          </h4>

          <Button variant="ghost">
            مشاهده همه
            <ArrowLeft className="size-4.5" />
          </Button>
        </div>

        <PropertiesGrid properties={[...Array(4)]} />
      </div>
    </section>
  );
};

export default SimilarProperties;
