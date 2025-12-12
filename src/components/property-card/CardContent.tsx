import React from "react";
import Link from "next/link";
import * as icon from "lucide-react";
import * as card from "@/components/ui/card";
import { toCommaDigits, toPersianDigits } from "@/utils/convertNumbers";
import { IPropertyCategory } from "@models/PropertyCategory";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { VariantProps } from "class-variance-authority";

interface CardContentProps {
  title: string;
  linkTo: string;
  province: string;
  rentAmount: string | number;
  mortgageAmount: string | number;
  propertyCategory: IPropertyCategory;
}

const CardContent = ({
  title,
  linkTo,
  province,
  rentAmount,
  mortgageAmount,
  propertyCategory,
}: CardContentProps) => {
  return (
    <card.CardContent className="py-3.5 px-3 flex flex-col justify-between gap-4">
      <div className="flex items-center gap-2">
        <Badge
          variant={
            propertyCategory?.labelColor as VariantProps<
              typeof badgeVariants
            >["variant"]
          }
        >
          {propertyCategory?.faTitle}
        </Badge>

        <Badge variant="outline">
          <icon.MapPin />
          {province}
        </Badge>
      </div>

      <Link href={linkTo}>
        <p className="text-sm md:text-base text-right font-medium line-clamp-1">
          {title}
        </p>
      </Link>

      <div className="flex flex-wrap items-center justify-evenly gap-4 bg-muted p-1.5 rounded-lg">
        <div className="flex gap-1 items-center">
          <span className="text-sm">رهن</span>

          <Badge className="bg-card" variant="outline">
            {toPersianDigits(toCommaDigits(mortgageAmount))} تومان
          </Badge>
        </div>

        <div className="flex gap-1 items-center">
          <span className="text-sm">اجاره</span>

          <Badge className="bg-card" variant="outline">
            {toPersianDigits(toCommaDigits(rentAmount))} تومان
          </Badge>
        </div>
      </div>
    </card.CardContent>
  );
};

export default CardContent;
