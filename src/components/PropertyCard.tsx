import * as card from "@/components/ui/card";
import Image from "next/image";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CameraOff, Heart, MapPin } from "lucide-react";
import { toPersianDigits } from "@/utils/convertNumbers";

interface PropertyCardProps {
  image?: string;
  type: "apartment" | "villa" | "villa-house";
  location: string;
  title: string;
  rentAmount: number;
  mortgageAmount: number;
}

const propertyTypes = {
  "villa-house": "خانه ویلایی",
  apartment: "آپارتمان",
  villa: "ویلا",
};

const PropertyCard = ({
  image,
  type,
  location,
  title,
  rentAmount,
  mortgageAmount,
}: PropertyCardProps) => {
  const localedMortgageAmount = mortgageAmount.toLocaleString();
  const localedRentAmount = rentAmount.toLocaleString();

  const persianMortgageAmount = toPersianDigits(String(localedMortgageAmount));
  const persianRentAmount = toPersianDigits(String(localedRentAmount));

  const propertyType = propertyTypes[type];

  return (
    <card.Card className="aspect-square overflow-hidden gap-0 p-0">
      <card.CardHeader className="relative h-full basis-2/3 bg-muted">
        {image ? (
          <Image
            className="object-cover object-center"
            alt="property image"
            sizes="600px"
            src={image}
            fill
          />
        ) : (
          <CameraOff className="absolute inset-0 m-auto size-full" />
        )}

        <Button
          className="absolute top-3 right-3 bg-card"
          variant="link"
          size="icon"
        >
          <Heart className="size-4.5 fill-muted stroke-destructive" />
          {/* change fill to fill-destructive when user liked this property */}
        </Button>
      </card.CardHeader>

      <card.CardContent className="py-2 px-3 flex flex-col justify-between gap-4 basis-1/3">
        <div className="flex items-center gap-2">
          <Badge variant="success">{propertyType}</Badge>

          <Badge variant="outline">
            <MapPin />
            {location}
          </Badge>
        </div>

        <p className="text-sm font-medium line-clamp-1 md:line-clamp-2">
          {title}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-muted p-1.5 rounded-lg">
          <div className="flex gap-1 items-center">
            <span className="text-sm">رهن</span>

            <Badge className="bg-card" variant="outline">
              {persianMortgageAmount} تومان
            </Badge>
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-sm">اجاره</span>

            <Badge className="bg-card" variant="outline">
              {persianRentAmount} تومان
            </Badge>
          </div>
        </div>
      </card.CardContent>
    </card.Card>
  );
};

export default PropertyCard;
