import authenticate from "@/utils/authenticate";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import UserModel from "@models/User";

export const GET = async () => {
  try {
    await connectToDB();

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
      { status: 200 },
    );
  } catch (_) {
    return Response.json(
      { message: "internal server error!" },
      { status: 500 },
    );
  }
};
