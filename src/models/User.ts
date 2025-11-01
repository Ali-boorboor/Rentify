import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  name: string;
  familyName: string;
  phone: string;
  agencyName: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    agencyName: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const UserModel: mongoose.Model<IUser> =
  mongoose.models.User || mongoose.model("User", schema);

export default UserModel;
