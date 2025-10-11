import React from "react";
import * as inputGroup from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, UserRound, X } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const OwnerTenantForm = () => {
  return (
    <TabsContent value="owner-tenant-form">
      <form className="space-y-4 md:space-y-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="grid w-full flex-1 items-center gap-2">
            <Label htmlFor="name">نام</Label>
            <inputGroup.InputGroup>
              <inputGroup.InputGroupInput
                placeholder="نام"
                className="pr-1"
                type="text"
                id="name"
              />
              <inputGroup.InputGroupAddon className="pl-0 pr-2">
                <UserRound />
              </inputGroup.InputGroupAddon>
            </inputGroup.InputGroup>
          </div>

          <div className="grid w-full flex-1 items-center gap-2">
            <Label htmlFor="family-name">نام خانوادگی</Label>
            <inputGroup.InputGroup>
              <inputGroup.InputGroupInput
                placeholder="نام خانوادگی"
                className="pr-1"
                id="family-name"
                type="text"
              />
              <inputGroup.InputGroupAddon className="pl-0 pr-2">
                <UserRound />
              </inputGroup.InputGroupAddon>
            </inputGroup.InputGroup>
          </div>
        </div>

        <div className="grid w-full flex-1 items-center gap-2">
          <Label htmlFor="phone">تلفن همراه</Label>
          <inputGroup.InputGroup>
            <inputGroup.InputGroupInput
              placeholder="09xxxxxxxxx"
              className="!px-1"
              type="text"
              id="phone"
            />
            <inputGroup.InputGroupAddon
              className="pl-0 pr-2"
              align="inline-start"
            >
              <Phone />
            </inputGroup.InputGroupAddon>
            <inputGroup.InputGroupAddon align="inline-end" className="pl-2">
              <X />
            </inputGroup.InputGroupAddon>
          </inputGroup.InputGroup>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            با قوانین<span className="text-primary">رنتی فای</span>موافق هستم
          </Label>
        </div>

        <Button className="w-full" type="submit">
          تایید و دریافت کد
        </Button>
      </form>
    </TabsContent>
  );
};

export default OwnerTenantForm;
