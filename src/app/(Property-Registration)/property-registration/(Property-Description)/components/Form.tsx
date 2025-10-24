import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Form = () => {
  return (
    <form className="grow flex flex-col justify-between gap-6">
      <div className="space-y-6">
        <Textarea
          className="min-h-40 h-full max-h-96 resize-none"
          placeholder="توضیحات خود را اینجا بنویسید..."
        />

        <div className="flex items-center space-x-2">
          <Checkbox id="isRented" />
          <Label htmlFor="isRented">ملک در اجاره است.</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="isReadyToBeUsed" />
          <Label htmlFor="isReadyToBeUsed">ملک تخلیه و مناسب بازدید است.</Label>
        </div>
      </div>

      <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
        <Button className="min-w-36" variant="ghost" type="button">
          <ArrowRight className="size-4.5" />
          مرحله قبل
        </Button>

        <Button className="min-w-36" type="submit">
          ادامه
          <ArrowLeft className="size-4.5" />
        </Button>
      </div>
    </form>
  );
};

export default Form;
