import adminPanelLinks from "@adminPanel/constants/adminPanelLinks";
import ContactUsMessageModel from "@models/ContactUsMessage";
import LinkCard from "@adminPanel/components/LinkCard";
import PropertyModel from "@models/Property";
import connectToDB from "@configs/database";
import React, { cache } from "react";

connectToDB();

const getPendingPropertiesCount = cache(async () => {
  return await PropertyModel.countDocuments({
    propertyStatus: "warning",
  }).lean();
});

const getContactUsMessagesCount = cache(async () => {
  return await ContactUsMessageModel.countDocuments({}).lean();
});

const page = async () => {
  const [pendingPropertiesCount, contactUsMessagesCount] = await Promise.all([
    getPendingPropertiesCount(),
    getContactUsMessagesCount(),
  ]);

  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        خوش آمدید به پنل ادمین
      </h2>

      <div className="bg-card border shadow-sm rounded-xl flex items-center justify-between flex-wrap gap-6 p-6">
        {adminPanelLinks.map((link) => (
          <LinkCard
            count={
              link.enTitle === "pendingAds"
                ? pendingPropertiesCount
                : contactUsMessagesCount
            }
            title={link.faTitle}
            href={link.href}
            key={link.id}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
