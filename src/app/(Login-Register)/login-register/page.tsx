import Image from "next/image";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Building2, Phone, UserRound, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  return (
    <div className="bg-white rounded-2xl basis-1/2 h-full">
      <div className="max-w-xl h-full m-auto flex flex-col gap-12 justify-center items-center">
        <Image
          className="max-w-52 max-h-20 object-cover object-center"
          src="/images/png/main-logo.png"
          alt="main logo image"
          height={200}
          width={200}
        />

        <h1 className="text-4xl font-bold">ورود | ثبت نام</h1>

        <Tabs
          defaultValue="owner-tenant-form"
          className="w-full gap-6"
          dir="rtl"
        >
          <TabsList className="w-full">
            <TabsTrigger value="owner-tenant-form">مالک | مستاجر</TabsTrigger>
            <TabsTrigger value="estate-agency-form">آژانس املاک</TabsTrigger>
          </TabsList>

          <form className="space-y-6">
            <TabsContent value="owner-tenant-form">
              <div className="space-y-6">
                <div className="flex flex-row-reverse flex-wrap gap-6">
                  <div className="grid w-full flex-1 items-center gap-2">
                    <Label htmlFor="name">نام</Label>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="نام"
                        className="pr-1"
                        type="text"
                        id="name"
                      />
                      <InputGroupAddon className="pl-0 pr-2">
                        <UserRound />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>

                  <div className="grid w-full flex-1 items-center gap-2">
                    <Label htmlFor="family-name">نام خانوادگی</Label>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="نام خانوادگی"
                        className="pr-1"
                        id="family-name"
                        type="text"
                      />
                      <InputGroupAddon className="pl-0 pr-2">
                        <UserRound />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </div>

                <div className="grid w-full flex-1 items-center gap-2">
                  <Label htmlFor="phone">تلفن همراه</Label>
                  <InputGroup>
                    <InputGroupInput
                      placeholder="09xxxxxxxxx"
                      className="!px-1"
                      type="text"
                      id="phone"
                    />
                    <InputGroupAddon align="inline-start" className="pl-0 pr-2">
                      <Phone />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end" className="pl-2">
                      <X />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="estate-agency-form">
              <div className="space-y-6">
                <div className="flex flex-row-reverse flex-wrap gap-6">
                  <div className="grid w-full flex-1 items-center gap-2">
                    <Label htmlFor="name">نام</Label>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="نام"
                        className="pr-1"
                        type="text"
                        id="name"
                      />
                      <InputGroupAddon className="pl-0 pr-2">
                        <UserRound />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>

                  <div className="grid w-full flex-1 items-center gap-2">
                    <Label htmlFor="family-name">نام خانوادگی</Label>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="نام خانوادگی"
                        className="pr-1"
                        id="family-name"
                        type="text"
                      />
                      <InputGroupAddon className="pl-0 pr-2">
                        <UserRound />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </div>

                <div className="grid w-full flex-1 items-center gap-2">
                  <Label htmlFor="agency-name">نام دفتر</Label>
                  <InputGroup>
                    <InputGroupInput
                      placeholder="نام دفتر"
                      className="pr-1"
                      id="agency-name"
                      type="text"
                    />
                    <InputGroupAddon className="pl-0 pr-2">
                      <Building2 />
                    </InputGroupAddon>
                  </InputGroup>
                </div>

                <div className="grid w-full flex-1 items-center gap-2">
                  <Label htmlFor="phone">تلفن همراه</Label>
                  <InputGroup>
                    <InputGroupInput
                      placeholder="09xxxxxxxxx"
                      className="!px-1"
                      type="text"
                      id="phone"
                    />
                    <InputGroupAddon align="inline-start" className="pl-0 pr-2">
                      <Phone />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end" className="pl-2">
                      <X />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </TabsContent>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">
                با قوانین<span className="text-primary">رنتی فای</span>موافق
                هستم
              </Label>
            </div>

            <Button className="w-full">تایید و دریافت کد</Button>

            <div className="flex items-center gap-3 max-w-full">
              <Separator className="basis-1/3 grow" />
              <span className="text-nowrap text-muted-foreground grow-0">
                یا ورود از طریق
              </span>
              <Separator className="basis-1/3 grow" />
            </div>

            <div className="flex gap-6 justify-center items-center">
              <Button variant="link" size="icon">
                <svg className="size-full">
                  <use href="/images/svg/google.svg" />
                </svg>
              </Button>
            </div>
          </form>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
