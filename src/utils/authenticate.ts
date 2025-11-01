import { validateToken } from "@/utils/token";
import { cookies } from "next/headers";

const authenticate = async () => {
  try {
    const token = (await cookies()).get("access-token")?.value as string;

    validateToken(token) as { phone: string };

    return true;
  } catch (_) {
    return false;
  }
};

export default authenticate;
