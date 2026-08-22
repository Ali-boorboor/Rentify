import authenticate from "@/utils/authenticate";
import validateRequestBody from "@/utils/validateRequestBody";
import connectToDB from "@configs/database";
import UserModel from "@models/User";
import * as validators from "@validators/user-panel/editInfos";
import { put } from "@vercel/blob";
import { randomUUID } from "crypto";

interface EditUserBody {
  firstname?: string;
  lastname?: string;
  email?: string;
}

export const PUT = async (request: Request) => {
  try {
    connectToDB();

    const user = (await authenticate()) as { phone: string };

    if (!user) {
      return Response.json({ message: "unauthorized!" }, { status: 401 });
    }

    const formData = await request.formData();

    const requestBody: EditUserBody = {};
    formData.forEach((value, key) => {
      if (!(value instanceof File)) {
        requestBody[key as keyof EditUserBody] = value.toString();
      }
    });

    const errors = await validateRequestBody({
      schema: validators.editInfosApiValidations,
      requestBody,
    });

    if (errors) {
      return Response.json(
        {
          message: "request body is invalid!",
          errors: errors,
        },
        { status: 422 },
      );
    }

    const profileImage = formData.get("profileImage");
    let file = null;

    const MAX_SIZE = 2 * 1024 * 1024;
    const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];

    if (profileImage instanceof File) {
      if (profileImage.size > MAX_SIZE) {
        return Response.json(
          { message: `image is too large, Max size is 2MB!` },
          { status: 400 },
        );
      }

      if (!ALLOWED_TYPES.includes(profileImage.type)) {
        return Response.json(
          { message: `invalid file type!` },
          { status: 400 },
        );
      }

      const fileExtension = profileImage.name.split(".").pop();

      const fileName = `${randomUUID()}.${fileExtension}`;

      const blob = await put(`profiles/${fileName}`, profileImage, {
        access: "public",
      });

      file = blob.url;
    }

    await UserModel.findOneAndUpdate(
      { phone: user?.phone },
      {
        ...requestBody,
        ...(file && {
          profileImage: file,
        }),
      },
    );

    return Response.json(
      { message: "user datas edited successfully" },
      { status: 200 },
    );
  } catch (_) {
    return Response.json(
      { message: "internal server error!" },
      { status: 500 },
    );
  }
};
