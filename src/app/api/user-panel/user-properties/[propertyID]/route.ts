import authenticate from "@/utils/authenticate";
import PropertyModel from "@models/Property";
import connectToDB from "@configs/database";
import { isValidObjectId } from "mongoose";

export const DELETE = async (
  _: Request,
  {
    params,
  }: {
    params: Promise<{ propertyID: string }>;
  }
) => {
  try {
    connectToDB();

    const user = (await authenticate()) as { phone: string };

    if (!user) {
      return Response.json({ message: "unauthorized!" }, { status: 401 });
    }

    const { propertyID } = await params;

    if (!isValidObjectId(propertyID)) {
      return Response.json(
        { message: "property id is invalid!" },
        { status: 422 }
      );
    }

    await PropertyModel.findByIdAndDelete(propertyID).lean();

    return Response.json(
      { message: "property deleted successfully" },
      { status: 200 }
    );
  } catch (_) {
    return Response.json(
      { message: "internal server error!" },
      { status: 500 }
    );
  }
};
