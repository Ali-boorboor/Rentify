import fs from "node:fs";
import path from "node:path";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import authenticate from "@/utils/authenticate";
import validateRequestBody from "@/utils/validateRequestBody";
import * as validators from "@validators/user-panel/editInfos";
import { randomUUID } from "crypto";

export const PUT = async (request: Request) => {
  try {
    connectToDB();

    const user = (await authenticate()) as { phone: string };

    if (!user) {
      return Response.json({ message: "unauthorized!" }, { status: 401 });
    }

    const formData = await request.formData();

    const requestBody: Record<string, any> = {};
    formData.forEach((value, key) => {
      requestBody[key] = value;
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
        { status: 422 }
      );
    }

    const profileImage = requestBody.profileImage as File;
    let file = null;

    if (profileImage) {
      const fileBuffer = Buffer.from(await profileImage.arrayBuffer());

      const fileExtension = profileImage.name.split(".").pop();

      const fileName = `${randomUUID()}.${fileExtension}`;

      const filePath = path.join(
        process.cwd(),
        "public",
        "uploads",
        "profiles",
        fileName
      );

      await fs.promises.writeFile(filePath, fileBuffer);

      file = fileName;
    }

    await UserModel.findOneAndUpdate(
      { phone: user?.phone },
      {
        ...requestBody,
        profileImage: profileImage && `/uploads/profiles/${file}`,
      }
    );

    return Response.json(
      { message: "user datas edited successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
