import EmptyPropertiesAlert from "@userPanel/userProperties/components/EmptyPropertiesAlert";
import UserPropertiesGrid from "@userPanel/userProperties/components/UserPropertiesGrid";
import React from "react";

const UserPropertiesPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های من
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        <UserPropertiesGrid />

        <EmptyPropertiesAlert />
      </div>
    </section>
  );
};

export default UserPropertiesPage;
