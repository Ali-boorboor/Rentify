import "@models/User";
import "@models/Property";
import mongoose from "mongoose";
import { IUser } from "@models/User";
import { IProperty } from "@models/Property";

interface IFavourite extends mongoose.Document {
  user: IUser;
  properties?: IProperty[];
}

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    properties: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Property",
        },
      ],
    },
  },
  { timestamps: true }
);

const FavouriteModel: mongoose.Model<IFavourite> =
  mongoose.models.Favourite || mongoose.model("Favourite", schema);

export default FavouriteModel;
export type { IFavourite };
