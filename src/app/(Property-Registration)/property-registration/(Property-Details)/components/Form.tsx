import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { toPersianDigits } from "@/utils/convertNumbers";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <form className="grow flex flex-col justify-between gap-6">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="تعداد اتاق خواب را انتخاب کنید"
            label="تعداد اتاق خواب"
            id="rooms-count"
          >
            {[...Array(5)].map((_, index) => (
              <SelectItem value={String(index + 1)} key={index}>
                {toPersianDigits(String(index + 1))} خوابه
              </SelectItem>
            ))}
            <SelectItem value="5+">بیش از ۵ خوابه</SelectItem>
          </LabeledSelectbox>

          <LabeledSelectbox
            placeholder="سن بنا را انتخاب کنید"
            id="property-age"
            label="سن بنا"
          >
            {[...Array(10)].map((_, index) => (
              <SelectItem value={String((index + 1) * 2)} key={index}>
                حدود {toPersianDigits(String((index + 1) * 2))} ساله
              </SelectItem>
            ))}
            <SelectItem value="20+">بیش از ۲۰ ساله</SelectItem>
          </LabeledSelectbox>
        </div>

        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="نوع واحد را انتخاب کنید"
            id="property-type"
            label="نوع واحد"
          >
            <SelectItem value="commercial">تجاری</SelectItem>
            <SelectItem value="residential">مسکونی</SelectItem>
          </LabeledSelectbox>

          <LabeledInput
            placeholder="متراژ  زیر بنا را وارد کنید"
            containerClassName="min-w-40"
            label="زیر بنا (متر)"
            id="meterage"
          />
        </div>

        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="موقعیت جغرافیایی ملک را انتخاب کنید"
            label="موقعیت"
            id="location"
          >
            <SelectItem value="north">شمال</SelectItem>
            <SelectItem value="south">جنوب</SelectItem>
            <SelectItem value="east">شرق</SelectItem>
            <SelectItem value="west">غرب</SelectItem>
          </LabeledSelectbox>

          <LabeledSelectbox
            placeholder="طبقه ملک را انتخاب کنید"
            label="طبقه"
            id="floor"
          >
            {[...Array(6)].map((_, index) => (
              <SelectItem value={String(index + 1)} key={index}>
                طبقه {toPersianDigits(String(index + 1))}
              </SelectItem>
            ))}
            <SelectItem value="6+">طبقه ۶+</SelectItem>
          </LabeledSelectbox>
        </div>

        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="تعداد طبقات ساختمان را انتخاب کنید"
            label="تعداد طبقات"
            id="floors"
          >
            {[...Array(6)].map((_, index) => (
              <SelectItem value={String(index + 1)} key={index}>
                {toPersianDigits(String(index + 1))} طبقه
              </SelectItem>
            ))}
            <SelectItem value="6+">+۶ طبقه</SelectItem>
          </LabeledSelectbox>

          <LabeledSelectbox
            placeholder="تعداد واحد هر طبقه را انتخاب کنید"
            label="تعداد واحد هر طبقه"
            id="floor"
          >
            {[...Array(4)].map((_, index) => (
              <SelectItem value={String(index + 1)} key={index}>
                {toPersianDigits(String(index + 1))} واحد
              </SelectItem>
            ))}
            <SelectItem value="4+">+۴ واحد</SelectItem>
          </LabeledSelectbox>
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
