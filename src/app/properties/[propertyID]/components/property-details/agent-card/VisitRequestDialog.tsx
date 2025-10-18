"use client";

import React from "react";
import Calendar from "@/components/ui/Calendar";
import * as dialog from "@/components/ui/dialog";
import TimePicker from "@/components/ui/TimePicker";
import SuccessDialog from "@singlePropertyPage/components/property-details/agent-card/SuccessDialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const VisitRequestDialog = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <dialog.Dialog>
      <dialog.DialogTrigger asChild>
        <Button className="w-full">درخواست بازدید</Button>
      </dialog.DialogTrigger>

      <dialog.DialogContent
        className="max-w-svw max-h-svh overflow-y-auto space-y-2"
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
          <dialog.DialogTitle>درخواست بازدید</dialog.DialogTitle>
          <dialog.DialogDescription className="sr-only">
            درخواست بازدید
          </dialog.DialogDescription>
        </dialog.DialogHeader>

        <Calendar
          disabled={{ before: new Date() }}
          defaultMonth={date}
          onSelect={setDate}
          selected={date}
          mode="single"
        />

        <TimePicker />

        <Button className="hover:bg-primary" disabled>
          ثبت درخواست بازدید
        </Button>

        <SuccessDialog />
      </dialog.DialogContent>
    </dialog.Dialog>
  );
};

export default VisitRequestDialog;
