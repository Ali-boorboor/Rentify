import mongoose from "mongoose";
import { LatLngExpression } from "leaflet";

interface IProvince extends mongoose.Document {
  locationCoordinates: LatLngExpression;
  faName: string;
  enName: string;
}

const schema = new mongoose.Schema(
  {
    faName: {
      type: String,
      required: true,
    },
    enName: {
      type: String,
      required: true,
    },
    locationCoordinates: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const ProvinceModel: mongoose.Model<IProvince> =
  mongoose.models.Province || mongoose.model("Province", schema);

export default ProvinceModel;
export type { IProvince };
