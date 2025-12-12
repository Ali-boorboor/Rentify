import mongoose from "mongoose";

interface IContactUsMessage extends mongoose.Document {
  name: string;
  email?: string;
  familyName: string;
  phone: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    familyName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ContactUsMessageModel: mongoose.Model<IContactUsMessage> =
  mongoose.models.ContactUsMessage ||
  mongoose.model("ContactUsMessage", schema);

export default ContactUsMessageModel;
export type { IContactUsMessage };
