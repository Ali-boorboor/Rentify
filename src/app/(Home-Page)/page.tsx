import MostViewedProperties from "@homePage/components/most-viewed-properties";
import Advertisement from "@homePage/components/advertisement";
import HowItWorks from "@homePage/components/how-it-works";
import Services from "@homePage/components/services";
import Header from "@homePage/components/header";
import Footer from "@/components/footer";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="mt-10 lg:mt-40 px-4 flex flex-col gap-10 md:gap-20">
        <MostViewedProperties />

        <Services />

        <HowItWorks />

        <Advertisement />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
