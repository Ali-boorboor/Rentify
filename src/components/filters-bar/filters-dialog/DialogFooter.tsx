import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DialogFooter = () => {
  const router = useRouter();

  return (
    <dialog.DialogFooter className="mt-4">
      <dialog.DialogClose asChild>
        <div className="flex flex-wrap-reverse items-center gap-6 w-full">
          <Button
            onClick={() => router.replace("/properties")}
            className="grow text-destructive"
            variant="ghost"
            type="button"
          >
            حذف همه
          </Button>

          <Button className="grow hover:bg-primary" type="submit">
            مشاهده نتایج
          </Button>
        </div>
      </dialog.DialogClose>
    </dialog.DialogFooter>
  );
};

export default DialogFooter;
