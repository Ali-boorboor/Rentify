import UserModel from "@models/User";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import authenticate from "@/utils/authenticate";

export const GET = async () => {
  try {
    connectToDB();

    const authenticatedUser = (await authenticate()) as { phone: string };

    if (!authenticatedUser) {
      return Response.json({ message: "unauthorized!" }, { status: 401 });
    }

    const user = await UserModel.findOne({
      phone: authenticatedUser.phone,
    }).lean();

    const userFavourites = await FavouriteModel.findOne({
      user: user?._id,
    }).lean();

    return Response.json(
      {
        message: "favourites fetched successfully",
        favourites: userFavourites,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
