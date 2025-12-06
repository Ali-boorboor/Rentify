import React from "react";
import * as dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DeleteDialogProps {
  shouldShowDeleteDialog: boolean;
  onOpenChangeHandler: (open: boolean) => void;
  deletePropertyHandler: () => void;
}

const DeleteDialog = ({
  shouldShowDeleteDialog,
  onOpenChangeHandler,
  deletePropertyHandler,
}: DeleteDialogProps) => {
  return (
    <dialog.Dialog
      onOpenChange={onOpenChangeHandler}
      open={shouldShowDeleteDialog}
    >
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

        <dialog.DialogTitle className="text-center text-base md:text-lg">
          آیا از حذف آگهی اطمینان دارید ؟
        </dialog.DialogTitle>

        <div className="flex flex-wrap-reverse gap-2 items-center w-full">
          <dialog.DialogClose className="flex-1" asChild>
            <Button className="min-w-32" variant="destructive">
              خیر
            </Button>
          </dialog.DialogClose>

          <dialog.DialogClose className="flex-1" asChild>
            <Button
              onClick={deletePropertyHandler}
              className="min-w-32"
              variant="success"
            >
              بله
            </Button>
          </dialog.DialogClose>
        </div>
      </dialog.DialogContent>
    </dialog.Dialog>
  );
};

export default DeleteDialog;
