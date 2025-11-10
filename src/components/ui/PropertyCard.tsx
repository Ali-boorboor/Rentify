"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as icon from "lucide-react";
import * as card from "@/components/ui/card";
import { toCommaDigits, toPersianDigits } from "@/utils/convertNumbers";
import { IPropertyCategory } from "@models/PropertyCategory";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BaseProps = {
  title: string;
  image?: string;
  province: string;
  className?: string;
  isFavourable?: boolean;
  rentAmount: string | number;
  mortgageAmount: string | number;
  propertyCategory: IPropertyCategory;
  propertyStatus?: "success" | "error" | "warning";
};

type HasRemoveButtonProps = BaseProps & {
  hasRemoveButton: true;
  removeButtonHandler: () => void;
};

type HasNoRemoveButtonProps = BaseProps & {
  hasRemoveButton?: false;
  removeButtonHandler?: never;
};

type PropertyCardProps = HasRemoveButtonProps | HasNoRemoveButtonProps;

const propertyStatusMap = {
  success: {
    label: "تأیید شده",
    icon: icon.Check,
    className: "text-success",
  },
  warning: {
    label: "در انتظار تأیید",
    icon: icon.TriangleAlert,
    className: "text-warning",
  },
  error: {
    label: "رد شده",
    icon: icon.X,
    className: "text-destructive",
  },
} as const;

const PropertyCard = ({
  image,
  title,
  province,
  className,
  rentAmount,
  mortgageAmount,
  propertyStatus,
  propertyCategory,
  isFavourable = true,
  hasRemoveButton = false,
  removeButtonHandler,
}: PropertyCardProps) => {
  const statusInfo = propertyStatus ? propertyStatusMap[propertyStatus] : null;

  return (
    <card.Card
      className={cn("h-96 sm:h-[28rem] gap-0 p-0 overflow-hidden", className)}
    >
      <card.CardHeader className="relative h-full bg-muted flex p-0">
        <Link className="relative h-full w-full" href="/properties/1">
          {image ? (
            <Image
              className="object-cover object-center"
              alt="property image"
              sizes="600px"
              src={image}
              fill
            />
          ) : (
            <icon.CameraOff className="absolute inset-0 m-auto size-full" />
          )}
        </Link>

        {hasRemoveButton && (
          <Button
            className="absolute top-3 left-3 bg-destructive"
            onClick={removeButtonHandler}
            variant="link"
            size="icon-sm"
          >
            <icon.X className="size-4.5 text-card" />
          </Button>
        )}

        {statusInfo && (
          <Button
            className={cn(
              "absolute top-3 right-3 bg-card border shadow-sm cursor-auto rounded-xl hover:opacity-100",
              statusInfo.className
            )}
            variant="link"
          >
            {statusInfo.label}
            <statusInfo.icon className="size-4.5" />
          </Button>
        )}

        {isFavourable && (
          <Button
            className="absolute top-3 right-3 bg-card border shadow-sm"
            variant="link"
            size="icon"
          >
            <icon.Heart className="size-4.5 fill-muted stroke-destructive" />
            {/* change fill to fill-destructive when user liked this property */}
          </Button>
        )}
      </card.CardHeader>

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

        <Link href="/properties/1">
          <p className="text-sm md:text-base text-right font-medium line-clamp-1">
            {title}
          </p>
        </Link>

        <div className="flex flex-wrap items-center justify-evenly gap-4 bg-muted p-1.5 rounded-lg">
          <div className="flex gap-1 items-center">
            <span className="text-sm">رهن</span>

            <Badge className="bg-card" variant="outline">
              {toPersianDigits(toCommaDigits(String(mortgageAmount)))} تومان
            </Badge>
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-sm">اجاره</span>

            <Badge className="bg-card" variant="outline">
              {toPersianDigits(toCommaDigits(String(rentAmount)))} تومان
            </Badge>
          </div>
        </div>
      </card.CardContent>
    </card.Card>
  );
};

export default PropertyCard;
