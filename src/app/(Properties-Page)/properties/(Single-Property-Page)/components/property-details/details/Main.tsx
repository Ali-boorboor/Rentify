import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { toPersianDigits } from "@/utils/convertNumbers";

interface MainDetailsProps {
  cardinalDirection: "west" | "east" | "north" | "south";
  propertyType: "residential" | "commercial";
  contractType: string;
  propertyAge: string;
  floorsCount: string;
  roomsCount: string;
  unitsCount: string;
  meterage: number;
  floor: string;
}

const cardinalDirections = {
  north: "شمال",
  south: "جنوب",
  east: "شرق",
  west: "غرب",
};

const propertyTypes = {
  residential: "مسکونی",
  commercial: "تجاری",
};

const MainDetails = ({
  cardinalDirection,
  contractType,
  propertyType,
  propertyAge,
  floorsCount,
  roomsCount,
  unitsCount,
  meterage,
  floor,
}: MainDetailsProps) => {
  const mainDetails = [
    {
      id: 1,
      label: "مساحت زیر بنا",
      value: `${toPersianDigits(meterage)} متر`,
    },
    { id: 2, label: "طبقات", value: toPersianDigits(floorsCount) },
    { id: 3, label: "خواب", value: `${toPersianDigits(roomsCount)} خوابه` },
    { id: 4, label: "طبقه", value: toPersianDigits(floor) },
    {
      id: 5,
      label: "تعداد واحد هر طبقه",
      value: toPersianDigits(unitsCount),
    },
    {
      id: 6,
      label: "موقعیت جغرافیایی ملک",
      value: cardinalDirections[cardinalDirection],
    },
    { id: 7, label: "سن بنا", value: toPersianDigits(propertyAge) },
    {
      id: 8,
      label: "نوع واحد",
      value: propertyTypes[propertyType],
    },
    {
      id: 9,
      label: "نوع معامله",
      value: contractType,
    },
  ];

  return (
    <>
      <div className="space-y-6 scroll-mt-40 md:scroll-mt-96" id="main-details">
        <h3
          className={cn(
            "relative w-max font-semibold text-lg md:text-xl",
            "after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-primary after:h-0.5 after:rounded-md"
          )}
        >
          اطلاعات اصلی
        </h3>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {mainDetails.map((detail) => (
            <p className="md:text-lg flex gap-1" key={detail.id}>
              <span className="flex gap-1">{detail.label}:</span>
              <span className="font-medium"> {detail.value}</span>
            </p>
          ))}
        </div>
      </div>

      <Separator />
    </>
  );
};

export default MainDetails;
