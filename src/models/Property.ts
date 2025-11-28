import "@models/User";
import "@models/Address";
import "@models/PropertyDetail";
import mongoose from "mongoose";
import { IAddress } from "@models/Address";
import { IPropertyDetail } from "@models/PropertyDetail";
import { IUser } from "@models/User";

interface IProperty extends mongoose.Document {
  title: string;
  createdAt: Date;
  address: IAddress;
  images?: string[];
  rentAmount: number;
  mortgageAmount: number;
  propertyDetails: IPropertyDetail;
  user: IUser;
  propertyStatus?: "success" | "error" | "warning";
}

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: mongoose.Types.ObjectId,
      ref: "Address",
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
    propertyDetails: {
      type: mongoose.Types.ObjectId,
      ref: "PropertyDetail",
      required: true,
    },
    images: {
      type: Array,
      required: false,
    },
    propertyStatus: {
      type: String,
      required: false,
      enum: ["success", "error", "warning"],
      default: "warning",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const PropertyModel: mongoose.Model<IProperty> =
  mongoose.models.Property || mongoose.model("Property", schema);

export default PropertyModel;
export type { IProperty };
