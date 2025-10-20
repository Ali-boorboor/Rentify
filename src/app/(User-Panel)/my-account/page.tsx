import userPanelLinks from "@userPanel/constants/userPanelLinks";
import LinkCard from "@userPanel/components/link-card";
import React from "react";

const UserPanelPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        خوش آمدید به پنل کاربری
      </h2>

      <div className="bg-card border shadow-sm rounded-xl flex items-center justify-between flex-wrap gap-6 p-6">
        {userPanelLinks.map((link) => (
          <LinkCard
            title={link.title}
            href={link.href}
            icon={link.icon}
            key={link.id}
          />
        ))}
      </div>
    </section>
  );
};

export default UserPanelPage;
