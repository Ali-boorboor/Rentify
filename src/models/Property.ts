import mongoose from "mongoose";

interface IProperty extends mongoose.Document {
  title: string;
  image?: string;
  location: { faName: string };
  rentAmount: number;
  mortgageAmount: number;
  propertyStatus?: "success" | "error" | "warning";
  propertyCategory: { faTitle: string };
}

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    location: {
      type: mongoose.Types.ObjectId,
      ref: "Province",
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
    propertyStatus: {
      type: String,
      required: false,
      enum: ["success", "error", "warning"],
      default: "warning",
    },
    propertyCategory: {
      type: mongoose.Types.ObjectId,
      ref: "PropertyCategory",
      required: true,
    },
  },
  { timestamps: true }
);

const PropertyModel: mongoose.Model<IProperty> =
  mongoose.models.Property || mongoose.model("Property", schema);

export default PropertyModel;
