import React from "react";
import Image from "next/image";
import * as inputGroup from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UserRound } from "lucide-react";

const IMAGE = "/images/png/contact-us-image.png";

const ContactForm = () => {
  return (
    <section className="px-4 mt-6">
      <div className="container m-auto space-y-10 md:space-y-20">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">تماس با ما</h1>
          <p className="text-primary font-medium">
            ما از اینکه شما را در جمع خود داریم بسیار خوشحالیم
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-between">
          <form className="grow basis-1/2 flex flex-col gap-6 bg-card p-4 rounded-xl border shadow-sm">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="grid grow items-center gap-2">
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

              <div className="grid grow items-center gap-2">
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
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="grid grow items-center gap-2">
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

              <div className="grid grow items-center gap-2">
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
