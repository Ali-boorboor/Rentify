import { toPersianDigits } from "@/utils/convertNumbers";
import { useEffect, useMemo, useState } from "react";

const OTP_DURATION = 5 * 60 * 1000;

const useOtpTimer = () => {
  const [timeLeft, setTimeLeft] = useState(OTP_DURATION);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const endTime = Date.now() + OTP_DURATION;

    const intervalId = setInterval(() => {
      const remaining = endTime - Date.now();

      if (remaining <= 0) {
        setTimeLeft(0);
        setIsExpired(true);
        clearInterval(intervalId);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isExpired]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");

    const seconds = Math.floor((timeLeft / 1000) % 60)
      .toString()
      .padStart(2, "0");

    return toPersianDigits(`${minutes} : ${seconds}`);
  }, [timeLeft]);

  const handleResendCode = () => {
    setTimeLeft(OTP_DURATION);
    setIsExpired(false);
  };

  return { isExpired, handleResendCode, formattedTime };
};

export default useOtpTimer;
