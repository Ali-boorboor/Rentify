import NavMenu from "@/components/NavMenu";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header className="bg-[url('/images/png/homepage-background.png')] bg-no-repeat bg-cover min-h-[90svh] rounded-b-4xl">
        <NavMenu />
      </header>
    </>
  );
};

export default HomePage;
