import React from "react";
import FileUploaders from "@propertyImagesRegistration/components/form/FileUploaders";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Form = () => {
  return (
    <form className="grow flex flex-col justify-between gap-6">
      <FileUploaders />

      <div className="text-muted-foreground text-sm md:text-base space-y-2">
        <p>فرمت عکس‌ها باید jpg، jpeg یا png باشد. </p>
        <p>عکس‌‌های غیر مرتبط توسط پشتیبانی حذف خواهد شد.</p>
      </div>

      <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
        <Button className="min-w-36" variant="ghost" type="button">
          <ArrowRight className="size-4.5" />
          مرحله قبل
        </Button>

        <Button className="min-w-36" type="submit">
          ثبت نهایی
        </Button>
      </div>
    </form>
  );
};

export default Form;
