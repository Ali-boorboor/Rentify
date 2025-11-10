import { validateToken } from "@/utils/token";
import { cookies } from "next/headers";

const authenticate = async () => {
  try {
    const token = (await cookies()).get("access-token")?.value as string;

    return validateToken(token) as { phone: string };
  } catch (_) {
    return false;
  }
};

export default authenticate;
