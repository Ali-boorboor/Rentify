import React, { cache } from "react";
import connectToDB from "@configs/database";
import ContactUsMessageModel from "@models/ContactUsMessage";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";
import MessagesGrid from "@adminPanel/contactMessages/components/MessagesGrid";
import { parseJson } from "@/utils/json";

const getContactMessages = cache(async () => {
  await connectToDB();

  return await ContactUsMessageModel.find({}).lean();
});

const page = async () => {
  const contactMessages = await getContactMessages();

  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        پیام های ارتباط با ما
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        {contactMessages.length ? (
          <MessagesGrid contactMessages={parseJson(contactMessages)} />
        ) : (
          <EmptyPropertiesAlert
            title="پیامی وجود ندارد."
            image="/images/png/user-panel/empty-favourites.png"
            description="پیام جدیدی وجود ندارد!"
            linkButtonText="صفحه اول"
            linkTo="/admin-panel"
          />
        )}
      </div>
    </section>
  );
};

export default page;
