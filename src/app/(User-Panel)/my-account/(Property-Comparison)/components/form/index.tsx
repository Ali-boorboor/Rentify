import authenticate from "@/utils/authenticate";
import { parseJson } from "@/utils/json";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import UserModel from "@models/User";
import Form from "@userPanel/propertyComparison/components/form/Form";

const FormWrapper = async () => {
  await connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser.phone,
  }).lean();

  const favouriteProperties = await FavouriteModel.findOne({
    user: user?._id,
  })
    .populate({
      path: "properties",
      match: { propertyStatus: "success" },
      populate: [
        { path: "address", populate: "province" },
        { path: "propertyDetails", populate: "propertyCategory" },
      ],
    })
    .lean();

  return <Form properties={parseJson(favouriteProperties?.properties)} />;
};

export default FormWrapper;
