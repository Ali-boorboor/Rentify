import React from "react";
import { toCommaDigits, toPersianDigits } from "@/utils/convertNumbers";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin } from "lucide-react";

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
        <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>

        <div className="flex gap-2 h-9 text-sm md:text-base font-normal text-muted-foreground">
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

      <div className="space-y-3">
        <Separator />

        <p className="text-sm md:text-base font-normal">
          شناسه آگهی: {propertyID}
        </p>
      </div>
    </div>
  );
};

export default PropertyHero;
