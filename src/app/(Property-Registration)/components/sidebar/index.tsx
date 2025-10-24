import Stepper from "@propertyRegistration/components/sidebar/Stepper";
import Image from "next/image";
import React from "react";

const IMAGE = "/images/png/property-registration/sidebar-image.png";

const Sidebar = () => {
  return (
    <aside className="flex flex-wrap gap-6 min-h-full flex-1">
      <section className="flex flex-1 flex-col justify-between items-center bg-card text-card-foreground border shadow-sm rounded-xl p-4 md:py-8 md:px-4">
        <div className="text-center space-y-2">
          <h1 className="text-xl md:text-2xl font-semibold">ثبت آگهی</h1>

          <h2 className="text-sm md:text-base font-normal text-muted-foreground">
            آگهی ملکت رو اینجا ثبت کن و به راحتی مستأجر پیدا کن!
          </h2>
        </div>

        <div className="w-32 md:w-60 aspect-square mx-auto">
          <Image
            className="object-cover object-center"
            alt="property registration image"
            height={300}
            width={300}
            src={IMAGE}
            priority
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col justify-between items-end gap-2 bg-secondary text-secondary-foreground border shadow-sm rounded-xl p-4 md:px-10 md:py-8">
        <Stepper />
      </section>
    </aside>
  );
};

export default Sidebar;
