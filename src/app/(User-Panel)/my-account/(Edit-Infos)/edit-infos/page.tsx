import React from "react";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import authenticate from "@/utils/authenticate";
import Form from "@userPanel/editInfos/components/Form";
import { parseJson } from "@/utils/json";

const EditInfosPage = async () => {
  connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser?.phone,
  }).lean();

  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        ویرایش اطلاعات
      </h2>

      <Form user={parseJson(user)} />
    </section>
  );
};

export default EditInfosPage;
