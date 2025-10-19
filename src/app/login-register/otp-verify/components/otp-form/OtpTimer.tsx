import React, { memo } from "react";
import useOtpTimer from "@otpVerify/hooks/useOtpTimer";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const OtpTimer = () => {
  const { isExpired, handleResendCode, formattedTime } = useOtpTimer();

  return (
    <div
      className="text-sm text-muted-foreground flex items-center min-h-10"
      dir="rtl"
    >
      {isExpired ? (
        <Button variant="ghost" onClick={handleResendCode}>
          دریافت مجدد کد
        </Button>
      ) : (
        <>
          <Clock className="size-4.5" />
          <span className="text-destructive w-14" dir="ltr">
            {formattedTime}
          </span>
          <span className="mr-2">تا دریافت مجدد کد</span>
        </>
      )}
    </div>
  );
};

export default memo(OtpTimer);
