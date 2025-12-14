import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ContactMessageCardDialogProps {
  message: string;
}

const ContactMessageCardDialog = ({
  message,
}: ContactMessageCardDialogProps) => {
  return (
    <dialog.Dialog>
      <dialog.DialogContent
        className="max-w-svw max-h-svh overflow-y-auto"
        showCloseButton={false}
        dir="rtl"
      >
        <dialog.DialogClose asChild>
          <Button
            className="text-destructive absolute top-4 left-4 has-[>svg]:px-1.5"
            variant="link"
          >
            <X className="size-5 p-0" />
          </Button>
        </dialog.DialogClose>

        <dialog.DialogHeader className="sm:text-right mb-4">
          <dialog.DialogTitle>متن پیام</dialog.DialogTitle>
          <dialog.DialogDescription className="sr-only">
            متن پیام
          </dialog.DialogDescription>
        </dialog.DialogHeader>

        <p className="text-sm md:text-base">{message}</p>
      </dialog.DialogContent>

      <dialog.DialogTrigger asChild>
        <Button className="w-full">مشاهده متن پیام</Button>
      </dialog.DialogTrigger>
    </dialog.Dialog>
  );
};

export default ContactMessageCardDialog;
