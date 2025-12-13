import { validateToken } from "@/utils/token";
import { cookies } from "next/headers";

export const GET = async () => {
  try {
    const token = (await cookies()).get("access-token")?.value as string;

    const isTokenValid = validateToken(token);

    if (isTokenValid) return Response.json({ message: "user is logged in" });
  } catch (_) {
    return Response.json({ message: "user is not login!" }, { status: 401 });
  }
};
