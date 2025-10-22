import React from "react";
import propertyTypes from "@/constants/propertyDatas";
import * as dropdownMenu from "@/components/ui/dropdown-menu";
import FiltersDialog from "@/components/filters-bar/FiltersDialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";

const FiltersBar = () => {
  return (
    <section className="bg-card shadow-sm border p-2 sm:p-4">
      {/* change variant="outline" to variant="default" when a filter added */}
      <div className="container m-auto flex gap-2 h-10">
        <FiltersDialog />

        <Separator className="mr-2 hidden sm:block" orientation="vertical" />

        <ScrollArea
          className="line-clamp-1 whitespace-nowrap hidden sm:block"
          dir="rtl"
        >
          <div className="space-x-2 px-2">
            <dropdownMenu.DropdownMenu dir="rtl">
              <dropdownMenu.DropdownMenuTrigger asChild>
                {/* change variant to success|orange|secondary based on property type */}
                <Button className="rounded-full" variant="success">
                  آپارتمان
                  <ChevronDown className="size-4.5" />
                </Button>
              </dropdownMenu.DropdownMenuTrigger>

              <dropdownMenu.DropdownMenuContent className="w-60 md:w-80 text-center">
                <dropdownMenu.DropdownMenuLabel>
                  نوع ملک
                </dropdownMenu.DropdownMenuLabel>

                {propertyTypes.map((propertyType) => (
                  <dropdownMenu.DropdownMenuItem
                    className="cursor-pointer justify-center"
                    data-value={propertyType.enTitle}
                    key={propertyType.id}
                  >
                    {propertyType.faTitle}
                  </dropdownMenu.DropdownMenuItem>
                ))}
              </dropdownMenu.DropdownMenuContent>
            </dropdownMenu.DropdownMenu>

            <Button className="rounded-full bg-primary/10" variant="outline">
              فقط اگهی های عکس دار
              <X className="size-4.5" />
            </Button>
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default FiltersBar;
