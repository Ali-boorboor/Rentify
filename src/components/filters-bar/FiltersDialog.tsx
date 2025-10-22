import React from "react";
import * as dialog from "@/components/ui/dialog";
import * as accordion from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Funnel, X } from "lucide-react";

import ImageFacilitiesFilter from "@/components/filters-bar/filters/ImageFacilities";
import MortgagePriceFilter from "@/components/filters-bar/filters/MortgagePrice";
import PropertyTypeFilter from "@/components/filters-bar/filters/PropertyType";
import FacilitiesFilter from "@/components/filters-bar/filters/Facilities";
import RentPriceFilter from "@/components/filters-bar/filters/RentPrice";
import MeterageFilter from "@/components/filters-bar/filters/Meterage";
import LocationFilter from "@/components/filters-bar/filters/Location";
import RoomsFilter from "@/components/filters-bar/filters/Rooms";

const FiltersDialog = () => {
  return (
    <dialog.Dialog>
      <dialog.DialogTrigger asChild>
        <Button
          className="rounded-full relative m-auto sm:m-0"
          variant="outline"
        >
          <Funnel className="size-4.5" />
          {/* if there was any filter show => <span className="absolute -top-1 -left-2 bg-destructive text-destructive-foreground w-5 h-5 flex justify-center items-center rounded-full border text-sm">
              ۱ filters count
              </span> */}
          فیلترها
        </Button>
      </dialog.DialogTrigger>

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

        <dialog.DialogHeader className="sm:text-right">
          <dialog.DialogTitle>فیلترها</dialog.DialogTitle>
          <dialog.DialogDescription className="sr-only">
            فیلترها
          </dialog.DialogDescription>
        </dialog.DialogHeader>

        <accordion.Accordion type="single" collapsible>
          <PropertyTypeFilter />

          <LocationFilter />

          <MortgagePriceFilter />

          <RentPriceFilter />

          <MeterageFilter />

          <RoomsFilter />

          <FacilitiesFilter />

          <ImageFacilitiesFilter />
        </accordion.Accordion>

        <dialog.DialogFooter>
          <dialog.DialogClose asChild>
            <div className="flex flex-wrap-reverse items-center gap-6 w-full">
              <Button className="grow text-destructive" variant="ghost">
                حذف همه
              </Button>

              <Button className="grow hover:bg-primary">مشاهده نتایج</Button>
            </div>
          </dialog.DialogClose>
        </dialog.DialogFooter>
      </dialog.DialogContent>
    </dialog.Dialog>
  );
};

export default FiltersDialog;
