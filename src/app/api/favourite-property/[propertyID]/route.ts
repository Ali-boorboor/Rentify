import UserModel from "@models/User";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import authenticate from "@/utils/authenticate";
import { isValidObjectId } from "mongoose";

export const PUT = async (
  _: Request,
  { params }: { params: Promise<{ propertyID: string }> }
) => {
  try {
    connectToDB();

    const authenticatedUser = (await authenticate()) as { phone: string };

    if (!authenticatedUser) {
      return Response.json({ message: "unauthorized!" }, { status: 401 });
    }

    const { propertyID } = await params;

    if (!isValidObjectId(propertyID)) {
      return Response.json(
        { message: "property id is invalid!" },
        { status: 422 }
      );
    }

    const user = await UserModel.findOne({
      phone: authenticatedUser.phone,
    }).lean();

    const userFavourites = await FavouriteModel.findOne({
      user: user?._id,
    }).lean<{ properties: string[] }>();

    const isPropertyAlreadyInFavourites = userFavourites?.properties?.some(
      (id: any) => id.toString() === propertyID
    );

    if (isPropertyAlreadyInFavourites) {
      await FavouriteModel.findOneAndUpdate(
        { user: user?._id },
        { $pull: { properties: propertyID } }
      ).lean();

      return Response.json(
        { message: "property removed from favourites successfully" },
        { status: 200 }
      );
    } else {
      await FavouriteModel.findOneAndUpdate(
        { user: user?._id },
        { $addToSet: { properties: propertyID } },
        { upsert: true }
      ).lean();

      return Response.json(
        { message: "property added to favourites successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
