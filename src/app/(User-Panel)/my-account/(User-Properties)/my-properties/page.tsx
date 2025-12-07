import UserPropertiesGridWrapper from "@userPanel/userProperties/components/UserPropertiesGridWrapper";
import UserPropertiesGridLoading from "@userPanel/userProperties/components/UserPropertiesGridLoading";
import React, { Suspense } from "react";

const UserPropertiesPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های من
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        <Suspense fallback={<UserPropertiesGridLoading />}>
          <UserPropertiesGridWrapper />
        </Suspense>
      </div>
    </section>
  );
};

export default UserPropertiesPage;
