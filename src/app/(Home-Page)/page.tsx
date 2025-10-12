import MostViewedProperties from "@homePage/components/most-viewed-properties";
import Header from "@homePage/components/header";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="mt-20 md:mt-40 px-4">
        <MostViewedProperties />
      </main>
    </>
  );
};

export default HomePage;
