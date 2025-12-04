import React from "react";
import Logout from "@userPanel/components/sidebar/Logout";
import UserInfo from "@userPanel/components/sidebar/UserInfo";
import LinkButtons from "@userPanel/components/sidebar/LinkButtons";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 shrink-0 sticky -top-4 md:top-28 bg-card border shadow-sm rounded-xl px-4 py-4 md:py-8 z-40">
      <nav className="flex flex-wrap md:flex-col gap-6">
        <UserInfo />

        <LinkButtons />

        <Logout />
      </nav>
    </aside>
  );
};

export default Sidebar;
