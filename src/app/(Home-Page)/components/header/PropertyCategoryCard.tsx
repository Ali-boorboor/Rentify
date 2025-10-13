import React from "react";
import Image from "next/image";
import * as card from "@/components/ui/card";
import { toPersianDigits } from "@/utils/convertNumbers";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PropertyCategoryCardProps {
  image: string;
  title: string;
  count?: number;
}

const PropertyCategoryCard = ({
  image,
  title,
  count = 92,
}: PropertyCategoryCardProps) => {
  const persianCount = toPersianDigits(String(count));

  return (
    <card.Card className="grow w-60 max-h-80 lg:max-h-max aspect-square p-0 border-0 overflow-hidden relative bg-transparent">
      <card.CardHeader className="relative h-full p-0">
        <Image
          className="object-cover object-center"
          alt="property category image"
          sizes="600px"
          src={image}
          fill
        />
      </card.CardHeader>

      <card.CardContent className="absolute bottom-0 w-full p-4">
        <div className="flex items-center justify-between bg-card w-full rounded-md p-2 md:p-4">
          <div>
            <h2 className="md:text-lg font-semibold">{title}</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              +{persianCount}ملک
            </p>
          </div>

          <Button size="icon" className="md:p-6">
            <ArrowLeft className="size-4 md:size-6" />
          </Button>
        </div>
      </card.CardContent>
    </card.Card>
  );
};

export default PropertyCategoryCard;
