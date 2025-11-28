import React from "react";
import Link from "next/link";
import Image from "next/image";
import authenticate from "@/utils/authenticate";
import VisitRequestDialog from "@singleProperty/components/property-details/agent-card/VisitRequestDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyAgentCardProps {
  agencyName: string;
  name: string;
}

const PropertyAgentCard = async ({
  name,
  agencyName,
}: PropertyAgentCardProps) => {
  const isUserLogin = await authenticate();

  return (
    <Card className="w-96 lg:sticky top-28 grow z-20">
      <CardContent className="w-full flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <Image
            className="w-24 h-24 object-cover object-center"
            src="/test/user.png"
            alt="user image"
            height={200}
            width={200}
          />

          <div>
            <h2 className="text-base md:text-lg font-semibold">{name}</h2>

            {agencyName && (
              <h2 className="text-sm md:text-base font-normal">{agencyName}</h2>
            )}
          </div>
        </div>

        {isUserLogin ? (
          <VisitRequestDialog />
        ) : (
          <Button className="w-full whitespace-normal" asChild>
            <Link href="/login-register">
              جهت ثبت درخواست بازدید ابتدا ورود کنید
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyAgentCard;
