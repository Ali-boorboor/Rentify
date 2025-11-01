import mongoose from "mongoose";

interface IProvince extends mongoose.Document {
  faName: "";
  enName: "";
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
  },
  { timestamps: true }
);

const ProvinceModel: mongoose.Model<IProvince> =
  mongoose.models.Province || mongoose.model("Province", schema);

export default ProvinceModel;
