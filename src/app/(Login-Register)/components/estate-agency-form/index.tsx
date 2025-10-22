import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import { Building2, Phone, UserRound } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const EstateAgencyForm = () => {
  return (
    <TabsContent value="estate-agency-form">
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <LabeledInput
            icon={<UserRound />}
            placeholder="نام"
            label="نام"
            id="name"
          />

          <LabeledInput
            icon={<UserRound />}
            placeholder="نام خانوادگی"
            label="نام خانوادگی"
            id="family-name"
          />
        </div>

        <LabeledInput
          icon={<Building2 />}
          placeholder="نام دفتر"
          label="نام دفتر"
          id="agency-name"
        />

        <LabeledInput
          icon={<Phone />}
          placeholder="09999999999"
          label="تلفن همراه"
          id="phone"
        />

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

export default EstateAgencyForm;
