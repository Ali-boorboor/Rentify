import LabeledInput from "@/components/ui/LabeledInput";
import * as icon from "lucide-react";
import React from "react";

const Inputs = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <LabeledInput
        id="name"
        label="نام"
        placeholder="نام"
        icon={<icon.UserRound />}
        containerClassName="min-w-52"
      />

      <LabeledInput
        id="family-name"
        label="نام‌ خانوادگی"
        icon={<icon.UserRound />}
        placeholder="نام‌ خانوادگی"
        containerClassName="min-w-52"
      />

      <LabeledInput
        id="job"
        label="شغل"
        placeholder="شغل"
        containerClassName="min-w-52"
        icon={<icon.BriefcaseBusiness />}
      />

      <LabeledInput
        id="phone"
        label="تلفن همراه"
        placeholder="تلفن همراه"
        containerClassName="min-w-52"
        icon={<icon.Phone />}
      />

      <LabeledInput
        id="email"
        label="ایمیل"
        placeholder="ایمیل"
        containerClassName="min-w-52"
        icon={<icon.Mail />}
      />

      <LabeledInput
        id="password"
        type="password"
        label="رمز عبور"
        icon={<icon.LockKeyholeOpen />}
        placeholder="رمز عبور"
        containerClassName="min-w-52"
      />
      {/* <EyeClosed /> | <icon.Eye /> */}
    </div>
  );
};

export default Inputs;
