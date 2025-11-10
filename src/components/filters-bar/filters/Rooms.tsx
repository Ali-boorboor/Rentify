import React from "react";
import * as accordion from "@/components/ui/accordion";
import LabeledInput from "@/components/ui/LabeledInput";
import { toEnglishDigits, toPersianDigits } from "@/utils/convertNumbers";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useField } from "formik";
import { cn } from "@/lib/utils";

const Rooms = () => {
  const [roomsField, _, roomsHelpers] = useField("rooms");

  const addRoom = () => {
    if (Number(roomsField.value) >= 5 || roomsField.value === "5+") {
      return roomsHelpers.setValue("5+");
    }

    roomsHelpers.setValue(
      Number(toEnglishDigits(String(roomsField.value))) + 1
    );
  };

  const removeRoom = () => {
    if (Number(roomsField.value) <= 0) return;
    else if (roomsField.value === "5+") return roomsHelpers.setValue(4);

    roomsHelpers.setValue(
      Number(toEnglishDigits(String(roomsField.value))) - 1
    );
  };

  return (
    <accordion.AccordionItem value="rooms">
      <accordion.AccordionTrigger>تعداد اتاق</accordion.AccordionTrigger>

      <accordion.AccordionContent>
        <accordion.AccordionContent className="p-2 space-y-2">
          <div className="flex gap-4 items-center border shadow-sm rounded-full px-2 py-1.5">
            <Button
              onClick={addRoom}
              variant="outline"
              type="button"
              size="icon"
            >
              <CirclePlus className="size-4.5" />
            </Button>

            <LabeledInput
              containerClassName={cn(
                "[&>div]:has-[[data-slot=input-group-control]:focus-visible]:ring-0",
                "[&>div]:border-0 [&>div]:shadow-none"
              )}
              value={toPersianDigits(String(roomsField.value)) || "۵+"}
              className="text-center"
              id="rooms"
              readOnly
            />

            <Button
              onClick={removeRoom}
              variant="outline"
              type="button"
              size="icon"
            >
              <CircleMinus className="size-4.5" />
            </Button>
          </div>
        </accordion.AccordionContent>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Rooms;
