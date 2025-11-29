import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DescriptionDetailsProps {
  description: string;
}

const DescriptionDetails = ({ description }: DescriptionDetailsProps) => {
  return (
    <dialog.Dialog>
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
          <p className="md:text-lg line-clamp-2 md:line-clamp-5">
            {description}
          </p>

          <dialog.DialogContent
            className="max-w-svw max-h-svh overflow-y-auto"
            showCloseButton={false}
            dir="rtl"
          >
            <dialog.DialogClose asChild>
              <Button
                className="text-destructive absolute top-4 left-4 has-[>svg]:px-1.5"
                variant="link"
              >
                <X className="size-5 p-0" />
              </Button>
            </dialog.DialogClose>

            <dialog.DialogHeader className="sm:text-right mb-4">
              <dialog.DialogTitle>توضیحات</dialog.DialogTitle>
              <dialog.DialogDescription className="sr-only">
                توضیحات
              </dialog.DialogDescription>
            </dialog.DialogHeader>

            <p className="text-sm md:text-base">{description}</p>
          </dialog.DialogContent>

          <dialog.DialogTrigger asChild>
            <Button variant="ghost">
              مشاهده همه
              <ArrowLeft className="size-4.5" />
            </Button>
          </dialog.DialogTrigger>
        </div>
      </div>

      <Separator />
    </dialog.Dialog>
  );
};

export default DescriptionDetails;
