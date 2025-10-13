import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const OAuthProviders = () => {
  return (
    <>
      <div className="flex items-center gap-3 max-w-full">
        <Separator className="shrink" />
        <span className="text-nowrap text-muted-foreground grow-0 m-auto">
          یا ورود از طریق
        </span>
        <Separator className="shrink" />
      </div>

      <div className="flex gap-6 justify-center items-center">
        <Button variant="link" size="icon">
          <Image
            className="size-full object-contain"
            src="/images/svg/google.svg"
            alt="google login icon"
            height={24}
            width={24}
          />
        </Button>
      </div>
    </>
  );
};

export default OAuthProviders;
