import Link from "next/link";
import React, { Suspense } from "react";
import PropertyCards from "@home/components/most-viewed-properties/PropertyCards";
import PropertyCardsLoading from "@home/components/most-viewed-properties/PropertyCardsLoading";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MostViewedProperties = () => {
  return (
    <section className="container mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">
          پر بازدید ترین‌های هفته‌ی گذشته
        </h3>

        <Button variant="ghost" asChild>
          <Link href="/properties">
            مشاهده همه
            <ArrowLeft className="size-4.5" />
          </Link>
        </Button>
      </div>

      <Suspense fallback={<PropertyCardsLoading />}>
        <PropertyCards />
      </Suspense>
    </section>
  );
};

export default MostViewedProperties;
