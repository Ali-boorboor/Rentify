import React from "react";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";
import QueryProvider from "@/components/providers/QueryProvider";
import UserPropertiesGrid from "@userPanel/userProperties/components/UserPropertiesGrid";
import EmptyPropertiesAlert from "@userPanel/userProperties/components/EmptyPropertiesAlert";
import { parseJson } from "@/utils/json";

const UserPropertiesPage = async () => {
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
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های من
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        {userProperties.length ? (
          <QueryProvider>
            <UserPropertiesGrid userProperties={parseJson(userProperties)} />
          </QueryProvider>
        ) : (
          <EmptyPropertiesAlert />
        )}
      </div>
    </section>
  );
};

export default UserPropertiesPage;
