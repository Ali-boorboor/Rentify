import React from "react";
import Image from "next/image";
import LabeledInput from "@/components/ui/LabeledInput";
import { Mail, Phone, UserRound } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const IMAGE = "/images/png/contact-us-image.png";

const ContactForm = () => {
  return (
    <section className="px-4">
      <div className="container m-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">تماس با ما</h1>
          <p className="text-primary font-medium">
            ما از اینکه شما را در جمع خود داریم بسیار خوشحالیم
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-between">
          <form className="grow basis-1/2 flex flex-col gap-6 bg-card p-4 rounded-xl border shadow-sm">
            <div className="flex flex-wrap gap-6 items-center">
              <LabeledInput
                icon={<UserRound />}
                placeholder="نام"
                label="نام"
                id="name"
              />

              <LabeledInput
                placeholder="نام‌ خانوادگی"
                icon={<UserRound />}
                label="نام‌ خانوادگی"
                id="family-name"
              />
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <LabeledInput
                placeholder="ایمیل"
                icon={<Mail />}
                label="ایمیل"
                id="email"
              />

              <LabeledInput
                placeholder="تلفن همراه"
                label="تلفن همراه"
                icon={<Phone />}
                id="phone"
              />
            </div>

            <Textarea
              className="min-h-40 grow resize-none"
              placeholder="پیام خود را اینجا بنویسید..."
            />

            <Button className="w-full">ارسال پیام</Button>
          </form>

          <div className="relative w-md aspect-square rounded-xl overflow-hidden border shadow-sm grow">
            <Image
              className="object-cover object-center"
              alt="contact us image"
              sizes="500px"
              src={IMAGE}
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
