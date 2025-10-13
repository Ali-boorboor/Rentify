import React from "react";
import Image from "next/image";
import * as card from "@/components/ui/card";
import propertyTypes from "@/constants/propertyDatas";
import { toPersianDigits } from "@/utils/convertNumbers";
import { CameraOff, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PropertyTypes } from "@/types";

interface PropertyCardProps {
  image?: string;
  type: PropertyTypes;
  location: string;
  title: string;
  rentAmount: number;
  mortgageAmount: number;
}

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
    <card.Card className="h-96 sm:h-[28rem] overflow-hidden gap-0 p-0">
      <card.CardHeader className="relative h-full bg-muted">
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

      <card.CardContent className="py-3.5 px-3 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="success">{propertyType}</Badge>

          <Badge variant="outline">
            <MapPin />
            {location}
          </Badge>
        </div>

        <p className="text-sm md:text-base font-medium line-clamp-1">{title}</p>

        <div className="flex flex-wrap items-center justify-evenly gap-4 bg-muted p-1.5 rounded-lg">
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
