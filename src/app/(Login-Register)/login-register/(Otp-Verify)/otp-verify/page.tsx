import OtpForm from "@otpVerify/components/otp-form";
import MainLogo from "@/components/ui/MainLogo";
import React from "react";

const OtpVerifyPage = () => {
  return (
    <section className="bg-card text-card-foreground rounded-2xl basis-1/2 grow p-4">
      <div className="max-w-xl min-h-[90svh] m-auto flex flex-col gap-6 md:gap-12 justify-center items-center">
        <MainLogo />

        <h1 className="text-xl md:text-4xl font-bold">کد تأیید</h1>

        <OtpForm />
      </div>
    </section>
  );
};

export default OtpVerifyPage;
