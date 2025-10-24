import React from "react";
import Image from "next/image";
import Inputs from "@userPanel/editInfos/components/Inputs";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="bg-card text-card-foreground border shadow-sm p-4 rounded-xl space-y-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-end gap-6">
          <Image
            className="w-24 h-24 md:w-28 md:h-28 object-cover object-center mx-auto md:mx-0"
            src="/test/user.png"
            alt="user image"
            height={200}
            width={200}
          />

          <Button variant="outline" type="button">
            تغییر عکس
          </Button>
        </div>

        <Inputs />
      </div>

      <Button className="w-full md:w-fit self-end" type="submit">
        ثبت تغییرات
      </Button>
    </form>
  );
};

export default Form;
