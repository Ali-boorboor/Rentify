import * as icons from "lucide-react";
import { IProperty } from "@models/Property";
import { toCommaDigits, toPersianDigits } from "@/utils/convertNumbers";

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

const filters = [
  {
    id: 1,
    faName: "مساحت زیر بنا",
    enName: "meterage",
    icon: <icons.RulerDimensionLine />,
    getValue: (property: IProperty) => {
      return toPersianDigits(property.propertyDetails.meterage) + " متر";
    },
  },
  {
    id: 2,
    faName: "تعداد طبقات",
    enName: "floorsCount",
    icon: <icons.Layers />,
    getValue: (property: IProperty) => {
      return toPersianDigits(property.propertyDetails.floorsCount);
    },
  },
  {
    id: 3,
    faName: "تعداد اتاق خواب",
    enName: "roomsCount",
    icon: <icons.BedDouble />,
    getValue: (property: IProperty) => {
      return toPersianDigits(property.propertyDetails.roomsCount) + " خوابه";
    },
  },
  {
    id: 4,
    faName: "طبقه",
    enName: "floor",
    icon: <icons.Layers />,
    getValue: (property: IProperty) => {
      return toPersianDigits(property.propertyDetails.floor);
    },
  },
  {
    id: 5,
    faName: "تعداد واحد هر طبقه",
    enName: "unitsCount",
    icon: <icons.House />,
    getValue: (property: IProperty) => {
      return toPersianDigits(property.propertyDetails.unitsCount);
    },
  },
  {
    id: 6,
    faName: "موقعیت جغرافیایی ملک",
    enName: "cardinalDirection",
    icon: <icons.MapPinned />,
    getValue: (property: IProperty) => {
      return cardinalDirections[property.propertyDetails.cardinalDirection];
    },
  },
  {
    id: 7,
    faName: "سن بنا",
    enName: "propertyAge",
    icon: <icons.House />,
    getValue: (property: IProperty) => {
      return toPersianDigits(property.propertyDetails.propertyAge);
    },
  },
  {
    id: 8,
    faName: "نوع واحد",
    enName: "propertyType",
    icon: <icons.Building2 />,
    getValue: (property: IProperty) => {
      return propertyTypes[property.propertyDetails.propertyType];
    },
  },
  {
    id: 9,
    faName: "نوع معامله",
    enName: "contractType",
    icon: <icons.FileText />,
    getValue: (property: IProperty) => {
      return property.propertyDetails.contractType.title;
    },
  },
  {
    id: 10,
    faName: "مبلغ اجاره",
    enName: "rentAmount",
    icon: <icons.Wallet />,
    getValue: (property: IProperty) => {
      return toPersianDigits(toCommaDigits(property.rentAmount));
    },
  },
  {
    id: 11,
    faName: "مبلغ رهن",
    enName: "mortgageAmount",
    icon: <icons.Wallet />,
    getValue: (property: IProperty) => {
      return toPersianDigits(toCommaDigits(property.mortgageAmount));
    },
  },
];

export default filters;
