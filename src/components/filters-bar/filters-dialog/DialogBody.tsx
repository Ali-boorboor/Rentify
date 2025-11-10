import React from "react";
import * as accordion from "@/components/ui/accordion";
import RoomsFilter from "@/components/filters-bar/filters/Rooms";
import MeterageFilter from "@/components/filters-bar/filters/Meterage";
import ProvincesFilter from "@/components/filters-bar/filters/Provinces";
import RentPriceFilter from "@/components/filters-bar/filters/RentPrice";
import FacilitiesFilter from "@/components/filters-bar/filters/Facilities";
import MortgagePriceFilter from "@/components/filters-bar/filters/MortgagePrice";
import ImageFacilitiesFilter from "@/components/filters-bar/filters/ImageFacilities";
import PropertyCategoriesFilter from "@/components/filters-bar/filters/PropertyCategories";
import { IEquipmentAndFacilitie } from "@models/EquipmentAndFacilitie";
import { IPropertyCategory } from "@models/PropertyCategory";
import { IProvince } from "@models/Province";

interface DialogBodyProps {
  provinces: IProvince[];
  equipments: IEquipmentAndFacilitie[];
  propertyCategories: IPropertyCategory[];
}

const DialogBody = ({
  propertyCategories,
  equipments,
  provinces,
}: DialogBodyProps) => {
  return (
    <accordion.Accordion type="single" collapsible>
      <PropertyCategoriesFilter propertyCategories={propertyCategories} />

      <ProvincesFilter provinces={provinces} />

      <MortgagePriceFilter />

      <RentPriceFilter />

      <MeterageFilter />

      <RoomsFilter />

      <FacilitiesFilter equipments={equipments} />

      <ImageFacilitiesFilter />
    </accordion.Accordion>
  );
};

export default DialogBody;
