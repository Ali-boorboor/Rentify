import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleCheck, CalendarDays, Clock, X } from "lucide-react";

const SuccessDialog = () => {
  return (
    <dialog.Dialog defaultOpen>
      <dialog.DialogContent
        className="flex flex-col gap-6 justify-center items-center"
        showCloseButton={false}
        dir="rtl"
      >
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
          درخواست بازدید شما با موفقیت ثبت شد
        </dialog.DialogTitle>

        <div className="flex items-center gap-2">
          <CalendarDays className="size-6" />

          <p>۱۴۰۴-۷-۲۶</p>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="size-6" />

          <p>۱۴:۰۰</p>
        </div>
      </dialog.DialogContent>
    </dialog.Dialog>
  );
};

export default SuccessDialog;
