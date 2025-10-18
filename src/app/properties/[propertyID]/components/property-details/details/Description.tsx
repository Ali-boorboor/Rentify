import React from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const descriptionDetails = [
  { id: 1, label: "سند شخصی" },
  { id: 2, label: "واحد شمالی" },
  { id: 3, label: "هود و گاز رو میزی" },
  { id: 4, label: "کابینت ممبران" },
];

const DescriptionDetails = () => {
  return (
    <>
      <div
        className="space-y-6 scroll-mt-40 md:scroll-mt-96"
        id="description-details"
      >
        <h3
          className={cn(
            "relative w-max font-semibold text-lg md:text-xl",
            "after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-primary after:h-0.5 after:rounded-md"
          )}
        >
          توضیحات
        </h3>

        <div className="space-y-6">
          {descriptionDetails.map((detail) => (
            <p className="md:text-lg w-full" key={detail.id}>
              {detail.label}
            </p>
          ))}

          <Button variant="ghost">
            مشاهده همه
            <ArrowLeft className="size-4.5" />
          </Button>
        </div>
      </div>

      <Separator />
    </>
  );
};

export default DescriptionDetails;
