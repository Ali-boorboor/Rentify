import React from "react";
import { toCommaDigits, toPersianDigits } from "@/utils/convertNumbers";
import { Clock, Flag, Heart, MapPin, Share2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface PropertyHeroProps {
  createdAt: Date;
  mortgageAmount: number;
  provinceName: string;
  rentAmount: number;
  propertyID: string;
  title: string;
}

const PropertyHero = ({
  title,
  createdAt,
  rentAmount,
  propertyID,
  provinceName,
  mortgageAmount,
}: PropertyHeroProps) => {
  const daysPassedSinceCreation = Math.floor(
    (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );

  const daysPassedSinceCreationText =
    daysPassedSinceCreation === 0
      ? "مدتی قبل"
      : `${toPersianDigits(daysPassedSinceCreation)} روز پیش`;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>

          <div className="space-x-2">
            <Button variant="link" size="icon">
              <Share2 className="size-4.5" />
            </Button>

            <Button className="bg-muted" variant="link" size="icon">
              <Heart className="size-4.5 fill-muted stroke-destructive" />
              {/* change fill to fill-destructive when user liked this property */}
            </Button>
          </div>
        </div>

        <div className="flex gap-2 max-w-60 h-9 text-sm md:text-base font-normal text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="size-4.5" />
            {provinceName}
          </p>

          <Separator orientation="vertical" />

          <p className="flex items-center gap-2">
            <Clock className="size-4.5" />
            {daysPassedSinceCreationText}
          </p>
        </div>
      </div>

      <div className="text-base md:text-lg font-medium space-y-2">
        <p>رهن {toPersianDigits(toCommaDigits(mortgageAmount))} تومان</p>

        <p>اجاره {toPersianDigits(toCommaDigits(rentAmount))} تومان</p>
      </div>

      <div className="space-y-2">
        <Separator />

        <div className="flex flex-wrap items-center justify-between">
          <p className="text-sm md:text-base font-normal">
            شناسه آگهی: {propertyID}
          </p>

          <Button variant="link">
            <Flag className="size-4.5" />
            گزارش
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
