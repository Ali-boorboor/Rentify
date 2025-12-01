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

        <dialog.DialogClose className="flex gap-2 items-center justify-center flex-wrap w-full">
          <Button
            onClick={deletePropertyHandler}
            className="flex-1"
            variant="success"
          >
            بله
          </Button>

          <Button className="flex-1" variant="destructive">
            خیر
          </Button>
        </dialog.DialogClose>
      </dialog.DialogContent>
    </dialog.Dialog>
  );
};

export default DeleteDialog;
