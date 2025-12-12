import React from "react";
import Link from "next/link";
import Image from "next/image";
import authenticate from "@/utils/authenticate";
import VisitRequestDialog from "@singleProperty/components/property-details/agent-card/VisitRequestDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

interface PropertyAgentCardProps {
  profileImage?: string;
  agencyName?: string;
  name: string;
}

const PropertyAgentCard = async ({
  name,
  agencyName,
  profileImage,
}: PropertyAgentCardProps) => {
  const isUserLogin = await authenticate();

  return (
    <Card className="w-96 lg:sticky top-28 grow z-20">
      <CardContent className="w-full flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            {profileImage ? (
              <Image
                className="object-cover object-center rounded-full border shadow-sm"
                src={profileImage}
                alt="user image"
                sizes="200px"
                fill
              />
            ) : (
              <div className="flex justify-center items-center absolute size-full border shadow-sm rounded-full bg-muted text-muted-foreground">
                <UserRound className="size-2/3" />
              </div>
            )}
          </div>

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
