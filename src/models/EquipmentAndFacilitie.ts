import mongoose from "mongoose";

interface IEquipmentAndFacilitie extends mongoose.Document {
  label: string;
  value: string;
}

const schema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EquipmentAndFacilitieModel: mongoose.Model<IEquipmentAndFacilitie> =
  mongoose.models.EquipmentAndFacilitie ||
  mongoose.model("EquipmentAndFacilitie", schema);

export default EquipmentAndFacilitieModel;
