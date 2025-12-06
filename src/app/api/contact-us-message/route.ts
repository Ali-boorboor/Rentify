import connectToDB from "@configs/database";
import ContactUsMessageModel from "@models/ContactUsMessage";
import validateRequestBody from "@/utils/validateRequestBody";
import { contactUsMessageValidations } from "@validators/contact-us-message";

export const POST = async (request: Request) => {
  try {
    connectToDB();

    const requestBody = await request.json();

    const errors = await validateRequestBody({
      schema: contactUsMessageValidations,
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

    await ContactUsMessageModel.insertOne({ ...requestBody });

    return Response.json(
      { message: "message saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
