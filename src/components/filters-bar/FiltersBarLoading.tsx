import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Funnel } from "lucide-react";

const FiltersBarLoading = () => {
  return (
    <div className="bg-card shadow-sm border p-2 sm:p-4">
      <div className="container m-auto flex gap-2 h-10">
        <Skeleton className="rounded-full relative m-auto sm:m-0 inline-flex items-center justify-center gap-2 h-10 px-3 py-2 has-[>svg]:px-3 text-sm">
          <Funnel className="size-4.5" />
          فیلترها
        </Skeleton>
      </div>
    </div>
  );
};

export default FiltersBarLoading;
