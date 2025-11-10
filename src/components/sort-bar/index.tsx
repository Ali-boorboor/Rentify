"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

const ACTIVE_SORT_STYLE = cn(
  "relative drop-shadow-lg drop-shadow-primary",
  "after:absolute after:bottom-0 after:w-full",
  "after:bg-primary after:h-0.5 after:rounded-md"
);

const SortBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortValue = searchParams.get("sort-by") || "newest";

  const handleSorting = (sortBy: "newest" | "cheapest" | "most-expensive") => {
    const searchParam = new URLSearchParams(searchParams.toString());

    searchParam.set("sort-by", sortBy);

    router.push(`?${searchParam.toString()}`);
  };

  return (
    <div className="flex gap-2 justify-between items-center max-w-full sm:max-w-72 border-b">
      <Button
        className={sortValue === "newest" ? ACTIVE_SORT_STYLE : ""}
        variant={sortValue === "newest" ? "ghost" : "link"}
        onClick={() => handleSorting("newest")}
      >
        بروز ترین
      </Button>
      <Button
        className={sortValue === "cheapest" ? ACTIVE_SORT_STYLE : ""}
        variant={sortValue === "cheapest" ? "ghost" : "link"}
        onClick={() => handleSorting("cheapest")}
      >
        ارزان ترین
      </Button>
      <Button
        className={sortValue === "most-expensive" ? ACTIVE_SORT_STYLE : ""}
        variant={sortValue === "most-expensive" ? "ghost" : "link"}
        onClick={() => handleSorting("most-expensive")}
      >
        گران ترین
      </Button>
    </div>
  );
};

export default SortBar;
