"use server";

import { cookies } from "next/headers";

const logoutAction = async () => {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("access-token");

    return true;
  } catch (_) {
    return false;
  }
};

export default logoutAction;
