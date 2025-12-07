import React from "react";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import authenticate from "@/utils/authenticate";
import Form from "@userPanel/propertyComparison/components/form/Form";
import { parseJson } from "@/utils/json";

const FormWrapper = async () => {
  connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser.phone,
  }).lean();

  const favouriteProperties = await FavouriteModel.findOne({
    user: user?._id,
  })
    .populate({
      path: "properties",
      populate: [
        { path: "address", populate: "province" },
        { path: "propertyDetails", populate: "propertyCategory" },
      ],
    })
    .lean();

  return <Form properties={parseJson(favouriteProperties?.properties)} />;
};

export default FormWrapper;
