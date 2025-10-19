import React from "react";
import InfoCard from "@contactUs/components/contact-info/InfoCard";
import { Clock, Mail, MapPin } from "lucide-react";

const infoCards = [
  {
    id: 1,
    icon: <MapPin />,
    title: "آدرس",
    description: "تهران - خیابان پاسداران مجتمع رویال - پلاک ۱۲",
  },
  {
    id: 2,
    icon: <Clock />,
    title: "ساعت کاری",
    description: "از ۸ صبح الی ۸ شب آماده خدمات رسانی به شما هستیم",
  },
  { id: 3, icon: <Mail />, title: "ایمیل ", description: "rentify@gmail.com" },
];

const ContactInfo = () => {
  return (
    <section className="px-4">
      <div className="container m-auto flex flex-wrap justify-between gap-6">
        {infoCards.map((infoCard) => (
          <InfoCard
            description={infoCard.description}
            title={infoCard.title}
            icon={infoCard.icon}
            key={infoCard.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
