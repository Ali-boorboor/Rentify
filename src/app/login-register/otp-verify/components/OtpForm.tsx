"use client";

import React from "react";
import * as inputOtp from "@/components/ui/input-otp";
import OtpTimer from "@otpVerify/components/OtpTimer";
import PhoneSection from "@otpVerify/components/PhoneSection";
import { Button } from "@/components/ui/button";

const OtpForm = () => {
  return (
    <form className="w-full space-y-4 md:space-y-6">
      <PhoneSection />

      <div dir="ltr" className="w-full space-y-3">
        <inputOtp.InputOTP
          maxLength={6}
          containerClassName="justify-between flex-wrap gap-1"
        >
          {[...Array(6)].map((_, index) => (
            <inputOtp.InputOTPGroup key={index}>
              <inputOtp.InputOTPSlot index={index} />
            </inputOtp.InputOTPGroup>
          ))}
        </inputOtp.InputOTP>

        <OtpTimer />
      </div>

      <Button className="w-full" type="submit">
        ورود
      </Button>
    </form>
  );
};

export default OtpForm;
