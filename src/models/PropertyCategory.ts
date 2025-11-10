import mongoose from "mongoose";

interface IPropertyCategory extends mongoose.Document {
  faTitle: string;
  enTitle: string;
  image: string;
  labelColor: "secondary" | "success" | "orange";
  link: string;
}

const schema = new mongoose.Schema(
  {
    faTitle: {
      type: String,
      required: true,
    },
    enTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    labelColor: {
      type: String,
      enum: ["secondary", "success", "orange"],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PropertyCategoryModel: mongoose.Model<IPropertyCategory> =
  mongoose.models.PropertyCategory ||
  mongoose.model("PropertyCategory", schema);

export default PropertyCategoryModel;
export type { IPropertyCategory };
