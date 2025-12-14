import UserModel from "@models/User";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";
import validateRequestBody from "@/utils/validateRequestBody";
import { pendingAdsValidations } from "@validators/admin-panel";

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

    const requestBody = (await request.json()) as { properties: string[] };

    const errors = await validateRequestBody({
      schema: pendingAdsValidations,
      requestBody,
    });

    if (errors) {
      return Response.json(
        {
          message: "request body is invalid!",
          errors: errors,
        },
        { status: 422 }
      );
    }

    await PropertyModel.updateMany(
      { _id: { $in: requestBody.properties } },
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
