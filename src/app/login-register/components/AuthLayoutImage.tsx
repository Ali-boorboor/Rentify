import Image from "next/image";
import React from "react";

const LOGIN_IMAGE_SRC = "/images/png/login-image.png";

const AuthLayoutImage = () => {
  return (
    <section className="basis-1/2 hidden md:block">
      <div className="relative max-w-2xl w-full aspect-video m-auto">
        <Image
          className="object-contain object-center"
          src={LOGIN_IMAGE_SRC}
          alt="login image"
          sizes="600px"
          fill
        />
      </div>
    </section>
  );
};

export default AuthLayoutImage;
