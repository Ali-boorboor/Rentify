import { AnyObject, ObjectSchema, ValidationError } from "yup";

interface ValidateRequestBodyProps {
  schema: ObjectSchema<AnyObject>;
  requestBody: object;
}

async function validateRequestBody({
  requestBody,
  schema,
}: ValidateRequestBodyProps) {
  try {
    await schema.validate(requestBody, {
      abortEarly: false,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.errors;
    }
  }
}

export default validateRequestBody;
