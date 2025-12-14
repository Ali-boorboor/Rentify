import UserModel from "@models/User";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";

export const PUT = async (request: Request) => {
  try {
    connectToDB();

    const authenticatedUser = (await authenticate()) as { phone: string };

    if (!authenticatedUser) {
      return Response.json({ message: "unauthorized!" }, { status: 401 });
    }

    const user = await UserModel.findOne({
      phone: authenticatedUser?.phone,
    }).lean();

    if (user?.role !== "ADMIN") {
      return Response.json({ message: "unauthorized!" }, { status: 403 });
    }

    const propertyIDs = (await request.json()) as string[];

    await PropertyModel.updateMany(
      { _id: { $in: propertyIDs } },
      { propertyStatus: "success" }
    );

    return Response.json(
      { message: "property status changed successfully" },
      { status: 200 }
    );
  } catch (_) {
    return Response.json(
      { message: "internal server error!" },
      { status: 500 }
    );
  }
};
