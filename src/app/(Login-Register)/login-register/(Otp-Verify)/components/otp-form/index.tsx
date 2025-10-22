"use client";

import React from "react";
import * as inputOtp from "@/components/ui/input-otp";
import OtpTimer from "@otpVerify/components/otp-form/OtpTimer";
import PhoneSection from "@otpVerify/components/otp-form/PhoneSection";
import { Button } from "@/components/ui/button";

const OtpForm = () => {
  return (
    <form className="w-full space-y-6">
      <PhoneSection />

      <div dir="ltr" className="w-full space-y-2">
        <inputOtp.InputOTP
          containerClassName="justify-center flex-wrap gap-6"
          maxLength={6}
        >
          {[...Array(6)].map((_, index) => (
            <inputOtp.InputOTPGroup className="flex-1" key={index}>
              <inputOtp.InputOTPSlot className="flex-1" index={index} />
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
