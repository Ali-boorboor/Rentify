"use client";

import React from "react";
import * as scrollArea from "@/components/ui/scroll-area";
import * as collapsible from "@/components/ui/collapsible";
import filters from "@propertyComparison/constants/filters";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const FiltersBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterButtonsOnClick = (filter: string) => {
    const searchParam = new URLSearchParams(searchParams.toString());
    const isFilterAlreadySet = searchParams.getAll("filters").includes(filter);

    if (isFilterAlreadySet) {
      searchParam.delete("filters", filter);
    } else {
      searchParam.append("filters", filter);
    }

    router.replace(`/property-comparison?${searchParam.toString()}`);
  };

  return (
    <div className="bg-card p-4 rounded-xl border shadow-sm">
      <collapsible.Collapsible>
        <div className="flex justify-between items-center gap-6">
          <h1 className="text-xl md:text-2xl font-semibold">مقایسه املاک</h1>

          <collapsible.CollapsibleTrigger asChild>
            <Button
              className="size-12"
              variant="outline"
              title="فیلتر‌ها"
              size="icon"
            >
              <Filter className="size-1/2" />
            </Button>
          </collapsible.CollapsibleTrigger>
        </div>

        <collapsible.CollapsibleContent>
          <scrollArea.ScrollArea className="whitespace-nowrap py-4">
            <div className="w-full flex justify-center items-center gap-2">
              {filters.map((filter) => (
                <Button
                  className={cn(
                    searchParams.getAll("filters").includes(filter.enName)
                      ? "bg-primary/20 hover:bg-primary/25"
                      : "hover:bg-primary/5"
                  )}
                  onClick={() => handleFilterButtonsOnClick(filter.enName)}
                  variant="outline"
                  key={filter.id}
                >
                  {filter.faName}
                </Button>
              ))}
            </div>

            <scrollArea.ScrollBar orientation="horizontal" />
          </scrollArea.ScrollArea>
        </collapsible.CollapsibleContent>
      </collapsible.Collapsible>
    </div>
  );
};

export default FiltersBar;
