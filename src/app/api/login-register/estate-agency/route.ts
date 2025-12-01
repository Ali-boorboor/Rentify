import UserModel from "@models/User";
import connectToDB from "@configs/database";
import validateRequestBody from "@/utils/validateRequestBody";
import { estateAgencySchema } from "@validators/login-register";
import { comparePassword, hashPassword } from "@/utils/bcrypt";
import { generateToken } from "@/utils/token";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  try {
    connectToDB();

    const requestBody = await request.json();
    const { phone, password, ...restOfRequestBody } = requestBody;

    const errors = await validateRequestBody({
      schema: estateAgencySchema,
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

    const existedUser = await UserModel.findOne({ phone }).lean();

    if (existedUser) {
      const isPasswordTrue = await comparePassword(
        password,
        existedUser.password
      );

      if (!isPasswordTrue) {
        return Response.json(
          { message: "password or phone is wrong!" },
          { status: 401 }
        );
      }

      const token = generateToken({ phone });

      const cookieStore = await cookies();
      cookieStore.set("access-token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        path: "/",
      });

      return Response.json({ message: "user logged in successfully" });
    }

    const newUserPassword = await hashPassword(password);

    await UserModel.create({
      ...restOfRequestBody,
      password: newUserPassword,
      phone,
    });

    const token = generateToken({ phone });

    const cookieStore = await cookies();
    cookieStore.set("access-token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      path: "/",
    });

    return Response.json(
      { message: "user signed up successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
