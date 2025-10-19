import Image from "next/image";
import React from "react";

const UserInfo = () => {
  return (
    <div className="flex items-center w-full justify-center md:justify-start gap-4">
      <Image
        className="w-16 h-16 md:w-20 md:h-20 object-cover object-center"
        src="/test/user.png"
        alt="user image"
        height={100}
        width={100}
      />

      <div className="text-sm md:text-base">
        <h1 className="font-semibold">امیرحسین صفری</h1>

        <p>۰۹۱۲۳۴۵۶۷۸۷</p>
      </div>
    </div>
  );
};

export default UserInfo;
