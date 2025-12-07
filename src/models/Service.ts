import mongoose from "mongoose";

interface IService extends mongoose.Document {
  image: string;
  title: string;
  description: string;
  buttonHref: string;
  buttonLabel: string;
}

const schema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonHref: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceModel: mongoose.Model<IService> =
  mongoose.models.Service || mongoose.model("Service", schema);

export default ServiceModel;
export type { IService };
