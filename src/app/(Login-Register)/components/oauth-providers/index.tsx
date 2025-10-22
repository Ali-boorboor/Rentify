import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const OAuthProviders = () => {
  return (
    <>
      <div className="flex items-center gap-2 max-w-full">
        <Separator className="shrink" />
        <span className="text-nowrap text-muted-foreground">
          یا ورود از طریق
        </span>
        <Separator className="shrink" />
      </div>

      <div className="m-auto">
        <Button variant="link" size="icon">
          <Image
            className="size-full object-contain"
            src="/images/svg/google.svg"
            alt="google login icon"
            height={30}
            width={30}
          />
        </Button>
      </div>
    </>
  );
};

export default OAuthProviders;
