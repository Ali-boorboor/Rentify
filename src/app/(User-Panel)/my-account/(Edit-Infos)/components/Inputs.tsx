import React from "react";
import * as icon from "lucide-react";
import * as inputGroup from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

const Inputs = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="grid flex-1 min-w-52 items-center gap-2">
        <Label htmlFor="name">نام</Label>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            placeholder="نام"
            className="pr-1"
            type="text"
            id="name"
          />
          <inputGroup.InputGroupAddon className="pl-0 pr-2">
            <icon.UserRound />
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </div>

      <div className="grid flex-1 min-w-52 items-center gap-2">
        <Label htmlFor="last-name">نام‌ خانوادگی</Label>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            placeholder="نام‌ خانوادگی"
            className="pr-1"
            id="last-name"
            type="text"
          />
          <inputGroup.InputGroupAddon className="pl-0 pr-2">
            <icon.UserRound />
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </div>

      <div className="grid flex-1 min-w-52 items-center gap-2">
        <Label htmlFor="job">شغل</Label>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            placeholder="شغل"
            className="pr-1"
            type="text"
            id="job"
          />
          <inputGroup.InputGroupAddon className="pl-0 pr-2">
            <icon.BriefcaseBusiness />
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </div>

      <div className="grid flex-1 min-w-52 items-center gap-2">
        <Label htmlFor="phone">تلفن همراه</Label>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            placeholder="تلفن همراه"
            className="pr-1"
            type="text"
            id="phone"
          />
          <inputGroup.InputGroupAddon
            className="pl-0 pr-2"
            align="inline-start"
          >
            <icon.Phone />
          </inputGroup.InputGroupAddon>
          <inputGroup.InputGroupAddon align="inline-end" className="pl-2">
            <icon.X />
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </div>

      <div className="grid flex-1 min-w-52 items-center gap-2">
        <Label htmlFor="email">ایمیل</Label>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            placeholder="ایمیل"
            className="pr-1"
            type="text"
            id="email"
          />
          <inputGroup.InputGroupAddon className="pl-0 pr-2">
            <icon.Mail />
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </div>

      <div className="grid flex-1 min-w-52 items-center gap-2">
        <Label htmlFor="password">رمز عبور</Label>
        <inputGroup.InputGroup>
          <inputGroup.InputGroupInput
            placeholder="رمز عبور"
            className="pr-1"
            type="password"
            id="password"
          />
          <inputGroup.InputGroupAddon
            className="pl-0 pr-2"
            align="inline-start"
          >
            <icon.LockKeyholeOpen />
          </inputGroup.InputGroupAddon>
          <inputGroup.InputGroupAddon align="inline-end" className="pl-2">
            <icon.Eye />
            {/* <EyeClosed /> */}
          </inputGroup.InputGroupAddon>
        </inputGroup.InputGroup>
      </div>
    </div>
  );
};

export default Inputs;
