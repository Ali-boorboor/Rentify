import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessagesSquare, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PropertyAgentCard = () => {
  return (
    <Card className="w-96 lg:sticky top-28 grow">
      <CardContent className="w-full flex flex-col items-center gap-4 md:gap-8">
        <div className="flex items-center gap-6">
          <Image
            className="w-24 h-24 object-cover object-center"
            src="/test/user.png"
            alt="user image"
            height={200}
            width={200}
          />

          <div>
            <h2 className="text-base md:text-lg font-semibold">علی میرحسینی</h2>

            <h2 className="text-sm md:text-base font-normal">املاک مبین</h2>
          </div>
        </div>

        <div className="space-y-2 w-full">
          <div className="flex items-center gap-2">
            <Button className="basis-1/2 shrink" variant="outline">
              <Phone className="size-4.5" />
              تماس
            </Button>

            <Button className="basis-1/2 shrink" variant="outline">
              <MessagesSquare className="size-4.5" />
              پیام
            </Button>
          </div>

          <Button className="w-full">درخواست بازدید</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyAgentCard;
