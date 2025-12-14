import React, { cache } from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import Form from "@adminPanel/pendingAds/components/remove-pending-ads/Form";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";
import { parseJson } from "@/utils/json";

const getAllPendingProperties = cache(async () => {
  await connectToDB();

  return await PropertyModel.find({
    propertyStatus: "warning",
  })
    .populate({
      path: "propertyDetails",
      populate: { path: "propertyCategory" },
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .lean();
});

const page = async () => {
  const allPendingProperties = await getAllPendingProperties();

  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        حذف آگهی‌های در انتظار
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        {allPendingProperties.length ? (
          <Form allPendingProperties={parseJson(allPendingProperties)} />
        ) : (
          <EmptyPropertiesAlert
            title="آگهی‌ وجود ندارد."
            image="/images/png/user-panel/empty-favourites.png"
            description="آگهی‌ جدیدی وجود ندارد!"
            linkButtonText="صفحه اول"
            linkTo="/admin-panel"
          />
        )}
      </div>
    </section>
  );
};

export default page;
