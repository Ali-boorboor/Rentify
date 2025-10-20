import React from "react";
import Image from "next/image";
import * as icon from "lucide-react";
import * as card from "@/components/ui/card";
import propertyTypes from "@/constants/propertyDatas";
import { toPersianDigits } from "@/utils/convertNumbers";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PropertyTypes } from "@/types";
import { cn } from "@/lib/utils";

type BaseProps = {
  image?: string;
  type: PropertyTypes;
  location: string;
  title: string;
  rentAmount: number;
  mortgageAmount: number;
  isFavoriteProperty?: boolean;
};

type UserPropertyProps = BaseProps & {
  isUserProperty: true;
  propertyStatus: "success" | "error" | "warning";
};

type NonUserPropertyProps = BaseProps & {
  isUserProperty?: false;
  propertyStatus?: never;
};

type PropertyCardProps = UserPropertyProps | NonUserPropertyProps;

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
  type,
  image,
  title,
  location,
  rentAmount,
  mortgageAmount,
  isUserProperty,
  propertyStatus,
}: PropertyCardProps) => {
  const persianMortgageAmount = toPersianDigits(
    mortgageAmount.toLocaleString()
  );
  const persianRentAmount = toPersianDigits(rentAmount.toLocaleString());

  const propertyType = propertyTypes.find(
    (propertyType) => propertyType.enTitle === type
  )?.faTitle;

  const statusInfo = propertyStatus ? propertyStatusMap[propertyStatus] : null;

  return (
    <card.Card className="h-96 sm:h-[28rem] gap-0 p-0">
      <card.CardHeader className="relative h-full bg-muted rounded-t-xl">
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

        {isUserProperty ? (
          <>
            <Button
              className="absolute -top-2 -left-2 bg-destructive"
              variant="link"
              size="icon-sm"
            >
              <icon.X className="size-4.5 text-card" />
            </Button>

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
          </>
        ) : (
          <Button
            className="absolute top-3 right-3 bg-card"
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
          <Badge variant="success">{propertyType}</Badge>

          <Badge variant="outline">
            <icon.MapPin />
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
