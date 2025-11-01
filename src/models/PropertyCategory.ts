import mongoose from "mongoose";

interface IPropertyCategory extends mongoose.Document {
  faTitle: string;
  enTitle: string;
  image: string;
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
  },
  { timestamps: true }
);

const PropertyCategoryModel: mongoose.Model<IPropertyCategory> =
  mongoose.models.PropertyCategory ||
  mongoose.model("PropertyCategory", schema);

export default PropertyCategoryModel;
