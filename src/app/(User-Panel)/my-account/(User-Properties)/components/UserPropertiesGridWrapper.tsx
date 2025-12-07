import React from "react";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";
import UserPropertiesGrid from "@userPanel/userProperties/components/UserPropertiesGrid";
import EmptyPropertiesAlert from "@userPanel/userProperties/components/EmptyPropertiesAlert";
import { parseJson } from "@/utils/json";

const UserPropertiesGridWrapper = async () => {
  connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser.phone,
  }).lean();

  const userProperties = await PropertyModel.find({ user: user?._id })
    .populate({
      path: "propertyDetails",
      populate: { path: "propertyCategory" },
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .lean();

  return (
    <>
      {userProperties.length ? (
        <UserPropertiesGrid userProperties={parseJson(userProperties)} />
      ) : (
        <EmptyPropertiesAlert />
      )}
    </>
  );
};

export default UserPropertiesGridWrapper;
