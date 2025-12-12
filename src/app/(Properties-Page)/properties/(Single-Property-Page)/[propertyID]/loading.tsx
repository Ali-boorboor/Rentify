import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CameraOff } from "lucide-react";

const Loading = () => {
  return (
    <>
      <section className="bg-card px-4 py-6 border shadow-sm">
        <div className="container m-auto space-y-6">
          <div className="rounded-xl flex gap-6">
            {[...Array(3).fill(0)].map((_, index) => (
              <Skeleton
                className="relative w-full aspect-square rounded-xl"
                key={index + 1}
              >
                <div className="flex justify-center items-center size-full bg-muted text-muted-foreground">
                  <CameraOff className="size-2/3" />
                </div>
              </Skeleton>
            ))}
          </div>

          <div className="flex flex-wrap-reverse items-end justify-between gap-6">
            <div className="grow-10 space-y-10 md:space-y-20 basis-1/3">
              {[...Array(3).fill(0)].map((_, index) => (
                <Skeleton className="h-96 rounded-xl" key={index + 1} />
              ))}
            </div>

            <Skeleton className="h-96 w-96 lg:sticky top-28 grow z-20" />
          </div>
        </div>
      </section>

      <div className="container m-auto">
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {[...Array(4).fill(0)].map((_, index) => (
            <Skeleton className="h-96 sm:h-[28rem]" key={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
