import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  name: string;
  password: string;
  email?: string;
  familyName: string;
  phone: string;
  agencyName?: string;
  createdAt: Date;
  updatedAt: Date;
  profileImage?: string;
  role?: "ADMIN" | "USER";
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
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
      unique: true,
    },
    agencyName: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
      required: false,
    },
  },
  { timestamps: true }
);

const UserModel: mongoose.Model<IUser> =
  mongoose.models.User || mongoose.model("User", schema);

export default UserModel;
export type { IUser };
