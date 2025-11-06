import "@models/Address";
import "@models/PropertyDetail";
import mongoose from "mongoose";
import { IAddress } from "@models/Address";
import { IPropertyDetail } from "@models/PropertyDetail";

interface IProperty extends mongoose.Document {
  title: string;
  address: IAddress;
  propertyDetails: IPropertyDetail;
  images?: string[];
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
  },
  { timestamps: true }
);

const PropertyModel: mongoose.Model<IProperty> =
  mongoose.models.Property || mongoose.model("Property", schema);

export default PropertyModel;
