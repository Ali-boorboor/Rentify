import authenticate from "@/utils/authenticate";
import { parseJson } from "@/utils/json";
import connectToDB from "@configs/database";
import UserModel from "@models/User";
import Form from "@userPanel/editInfos/components/Form";

const EditInfosPage = async () => {
  await connectToDB();

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
