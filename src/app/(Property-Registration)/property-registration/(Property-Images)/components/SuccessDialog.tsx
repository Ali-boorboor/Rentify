import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleCheck, X } from "lucide-react";

const SuccessDialog = () => {
  return (
    <dialog.Dialog>
      <dialog.DialogContent
        className="flex flex-col gap-6 justify-center items-center"
        showCloseButton={false}
        dir="rtl"
      >
        <dialog.DialogOverlay className="bg-[url('/images/png/property-registration/success-dialog-frame.png')] bg-cover bg-center bg-no-repeat -z-10 opacity-50" />

        <dialog.DialogClose asChild>
          <Button
            className="text-destructive absolute top-4 left-4 has-[>svg]:px-1"
            variant="link"
          >
            <X className="size-5" />
          </Button>
        </dialog.DialogClose>

        <dialog.DialogHeader className="sm:text-right">
          <dialog.DialogDescription className="sr-only"></dialog.DialogDescription>
        </dialog.DialogHeader>

        <CircleCheck className="stroke-card fill-success size-20" />

        <dialog.DialogTitle className="text-center">
          آگهی شما با موفقیت ثبت شد
        </dialog.DialogTitle>
      </dialog.DialogContent>
    </dialog.Dialog>
  );
};

export default SuccessDialog;
