import mongoose from "mongoose";

interface IContractType extends mongoose.Document {
  title: "";
  value: "";
}

const schema = new mongoose.Schema(
  {
    title: {
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

const ContractTypeModel: mongoose.Model<IContractType> =
  mongoose.models.ContractType || mongoose.model("ContractType", schema);

export default ContractTypeModel;
