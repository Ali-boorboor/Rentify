import React from "react";
import MainLogo from "@/components/MainLogo";
import OAuthProviders from "@loginRegister/components/OAuthProviders";
import OwnerTenantForm from "@loginRegister/components/OwnerTenantForm";
import EstateAgencyForm from "@loginRegister/components/EstateAgencyForm";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage = () => {
  return (
    <section className="bg-white rounded-2xl basis-1/2 grow p-4">
      <div className="max-w-xl min-h-[90svh] m-auto flex flex-col gap-4 md:gap-12 justify-center items-center">
        <MainLogo />

        <h1 className="text-xl md:text-4xl font-bold">ورود | ثبت نام</h1>

        <Tabs
          defaultValue="owner-tenant-form"
          className="w-full gap-4 md:gap-6"
          dir="rtl"
        >
          <TabsList className="w-full">
            <TabsTrigger value="owner-tenant-form">مالک | مستاجر</TabsTrigger>
            <TabsTrigger value="estate-agency-form">آژانس املاک</TabsTrigger>
          </TabsList>

          <OwnerTenantForm />

          <EstateAgencyForm />

          <OAuthProviders />
        </Tabs>
      </div>
    </section>
  );
};

export default LoginPage;
