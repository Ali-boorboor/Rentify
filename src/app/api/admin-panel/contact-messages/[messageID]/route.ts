import UserModel from "@models/User";
import connectToDB from "@configs/database";
import authenticate from "@/utils/authenticate";
import ContactUsMessageModel from "@models/ContactUsMessage";
import { isValidObjectId } from "mongoose";

export const DELETE = async (
  _: Request,
  {
    params,
  }: {
    params: Promise<{ messageID: string }>;
  }
) => {
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

    const { messageID } = await params;

    if (!isValidObjectId(messageID)) {
      return Response.json(
        { message: "message id is invalid!" },
        { status: 422 }
      );
    }

    await ContactUsMessageModel.findByIdAndDelete(messageID).lean();

    return Response.json(
      { message: "message deleted successfully" },
      { status: 200 }
    );
  } catch (_) {
    return Response.json(
      { message: "internal server error!" },
      { status: 500 }
    );
  }
};
