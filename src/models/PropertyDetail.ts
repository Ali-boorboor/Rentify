import "@models/ContractType";
import "@models/PropertyCategory";
import "@models/EquipmentAndFacilitie";
import mongoose from "mongoose";
import { IEquipmentAndFacilitie } from "@models/EquipmentAndFacilitie";
import { IPropertyCategory } from "@models/PropertyCategory";
import { IContractType } from "@models/ContractType";

interface IPropertyDetail extends mongoose.Document {
  propertyCategory: IPropertyCategory;
  contractType: IContractType;
  rentAmount: number;
  mortgageAmount: number;
  isTransmutable: boolean;
  unitsCount: string;
  roomsCount: string;
  propertyType: "residential" | "commercial";
  propertyAge: string;
  meterage: number;
  cardinalDirection: "west" | "east" | "north" | "south";
  floorsCount: string;
  floor: string;
  equipments: string[] | IEquipmentAndFacilitie[];
  descriptionMessage: string;
  isPropertyReadyToBeUsed: boolean;
}

const schema = new mongoose.Schema(
  {
    propertyCategory: {
      type: mongoose.Types.ObjectId,
      ref: "PropertyCategory",
      required: true,
    },
    contractType: {
      type: mongoose.Types.ObjectId,
      ref: "ContractType",
      required: true,
    },
    rentAmount: {
      type: Number,
      required: true,
    },
    mortgageAmount: {
      type: Number,
      required: true,
    },
    isTransmutable: {
      type: Boolean,
      required: true,
    },
    unitsCount: {
      type: String,
      required: true,
    },
    roomsCount: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["residential", "commercial"],
      required: true,
    },
    propertyAge: {
      type: String,
      required: true,
    },
    meterage: {
      type: Number,
      required: true,
    },
    cardinalDirection: {
      type: String,
      enum: ["west", "east", "north", "south"],
      required: true,
    },
    floorsCount: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    equipments: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "EquipmentAndFacilitie",
        },
      ],
      required: true,
      validate: [
        (array: string[]) => array.length > 0,
        "at least one equipment is required!",
      ],
    },
    descriptionMessage: {
      type: String,
      required: true,
    },
    isPropertyReadyToBeUsed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const PropertyDetailModel: mongoose.Model<IPropertyDetail> =
  mongoose.models.PropertyDetail || mongoose.model("PropertyDetail", schema);

export default PropertyDetailModel;
export type { IPropertyDetail };
