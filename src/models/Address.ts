import "@models/Province";
import mongoose from "mongoose";
import { LatLngExpression } from "leaflet";
import { IProvince } from "@models/Province";

interface IAddress extends mongoose.Document {
  fullAddress: string;
  mainStreet: string;
  sideStreet: string;
  province: IProvince;
  propertyLocationCoordinates: LatLngExpression;
}

const schema = new mongoose.Schema(
  {
    fullAddress: {
      type: String,
      required: true,
    },
    mainStreet: {
      type: String,
      required: true,
    },
    sideStreet: {
      type: String,
      required: true,
    },
    province: {
      type: mongoose.Types.ObjectId,
      ref: "Province",
      required: true,
    },
    propertyLocationCoordinates: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const AddressModel: mongoose.Model<IAddress> =
  mongoose.models.Address || mongoose.model("Address", schema);

export default AddressModel;
export type { IAddress };
