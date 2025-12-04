import React from "react";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import authenticate from "@/utils/authenticate";
import Form from "@userPanel/propertyComparison/components/Form";
import { parseJson } from "@/utils/json";

const PropertyComparisonPage = async () => {
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

  return (
    <section className="w-full space-y-6">
      <div className="text-center md:text-right space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold">
          مقایسه املاک ذخیره شده
        </h2>

        <p className="text-sm md:text-base text-muted-foreground font-normal">
          (حداقل ۲ کارت و حداکثر ۳ کارت را برای مقایسه انتخاب کنید)
        </p>
      </div>

      <Form properties={parseJson(favouriteProperties?.properties)} />
    </section>
  );
};

export default PropertyComparisonPage;
