import Link from "next/link";
import React, { Suspense } from "react";
import PropertyCards from "@singleProperty/components/similar-properties/PropertyCards";
import PropertyCardsLoading from "@singleProperty/components/similar-properties/PropertyCardsLoading";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SimilarPropertiesProps {
  propertyCategory: string;
  propertyID: string;
}

const SimilarProperties = async ({
  propertyCategory,
  propertyID,
}: SimilarPropertiesProps) => {
  return (
    <section className="px-4 py-6">
      <div className="container m-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h4 className="text-lg md:text-2xl font-semibold">
            خانه هایی با ارزش مشابه
          </h4>

          <Button variant="ghost" asChild>
            <Link href="/properties">
              مشاهده همه
              <ArrowLeft className="size-4.5" />
            </Link>
          </Button>
        </div>

        <Suspense fallback={<PropertyCardsLoading />}>
          <PropertyCards
            propertyCategory={propertyCategory}
            propertyID={propertyID}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default SimilarProperties;
