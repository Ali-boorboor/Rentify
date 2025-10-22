import React from "react";
import * as scrollArea from "@/components/ui/scroll-area";
import * as collapsible from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const FiltersBar = () => {
  return (
    <div className="bg-card p-3 rounded-xl border shadow-sm">
      <collapsible.Collapsible>
        <div className="flex justify-between items-center gap-6">
          <h1 className="text-xl md:text-2xl font-semibold">مقایسه املاک</h1>

          <collapsible.CollapsibleTrigger asChild>
            <Button className="size-12" variant="outline" size="icon">
              <Filter className="size-1/2" />
            </Button>
          </collapsible.CollapsibleTrigger>
        </div>

        <collapsible.CollapsibleContent>
          <scrollArea.ScrollArea className="whitespace-nowrap py-4">
            <div className="w-full flex items-center gap-6">
              {[...Array(30)].map((_, index) => (
                // todo: if button filter was selected set bg-primary/10 & hover:bg-transparent for its class
                <Button variant="outline" key={index}>
                  test
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
