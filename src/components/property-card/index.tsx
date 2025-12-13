import React from "react";
import * as card from "@/components/ui/card";
import CardHeader from "@/components/property-card/CardHeader";
import CardContent from "@/components/property-card/CardContent";
import { IPropertyCategory } from "@models/PropertyCategory";
import { cn } from "@/lib/utils";

type BaseProps = {
  title: string;
  image?: string;
  linkTo: string;
  province: string;
  className?: string;
  propertyID: string;
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

const PropertyCard = ({
  image,
  title,
  linkTo,
  province,
  className,
  rentAmount,
  propertyID,
  mortgageAmount,
  propertyStatus,
  propertyCategory,
  isFavourable = true,
  hasRemoveButton = false,
  removeButtonHandler,
}: PropertyCardProps) => {
  return (
    <card.Card
      className={cn("h-96 sm:h-[28rem] gap-0 p-0 overflow-hidden", className)}
    >
      <CardHeader
        image={image}
        linkTo={linkTo}
        propertyID={propertyID}
        isFavourable={isFavourable}
        propertyStatus={propertyStatus}
        hasRemoveButton={hasRemoveButton}
        removeButtonHandler={removeButtonHandler}
      />

      <CardContent
        title={title}
        linkTo={linkTo}
        province={province}
        rentAmount={rentAmount}
        mortgageAmount={mortgageAmount}
        propertyCategory={propertyCategory}
      />
    </card.Card>
  );
};

export default PropertyCard;
