import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ACTIVE_SORT_STYLE = cn(
  "relative drop-shadow-lg drop-shadow-primary",
  "after:absolute after:bottom-0 after:w-full",
  "after:bg-primary after:h-0.5 after:rounded-md"
);

const SortBar = () => {
  return (
    <div className="flex gap-2 justify-between items-center max-w-full sm:max-w-72 border-b">
      <Button className={ACTIVE_SORT_STYLE} variant="ghost">
        بروز ترین
      </Button>
      <Button variant="link">ارزان ترین</Button>
      <Button variant="link">گران ترین</Button>
    </div>
  );
};

export default SortBar;
