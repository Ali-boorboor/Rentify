import OtpForm from "@otpVerify/components/OtpForm";
import MainLogo from "@/components/MainLogo";
import React from "react";

const OtpVerifyPage = () => {
  return (
    <section className="bg-card text-card-foreground rounded-2xl basis-1/2 grow p-4">
      <div className="max-w-xl min-h-[90svh] m-auto flex flex-col gap-4 md:gap-12 justify-center items-center">
        <MainLogo />

        <h1 className="text-xl md:text-4xl font-bold">کد تأیید</h1>

        <OtpForm />
      </div>
    </section>
  );
};

export default OtpVerifyPage;
