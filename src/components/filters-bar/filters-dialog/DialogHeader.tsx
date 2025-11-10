import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const DialogHeader = () => {
  return (
    <>
      <dialog.DialogClose asChild>
        <Button
          className="text-destructive absolute top-4 left-4 has-[>svg]:px-1.5"
          variant="link"
        >
          <X className="size-5 p-0" />
        </Button>
      </dialog.DialogClose>

      <dialog.DialogHeader className="sm:text-right mb-4">
        <dialog.DialogTitle>فیلترها</dialog.DialogTitle>
        <dialog.DialogDescription className="sr-only">
          فیلترها
        </dialog.DialogDescription>
      </dialog.DialogHeader>
    </>
  );
};

export default DialogHeader;
