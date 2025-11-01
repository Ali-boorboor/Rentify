import React from "react";
import MainLogo from "@/components/ui/MainLogo";
import QueryProvider from "@/components/providers/QueryProvider";
import OwnerTenantForm from "@loginRegister/components/owner-tenant-form";
import EstateAgencyForm from "@loginRegister/components/estate-agency-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginRegisterPage = () => {
  return (
    <section className="bg-card text-card-foreground rounded-2xl basis-1/2 grow p-4">
      <div className="max-w-xl min-h-[90svh] mx-auto flex flex-col gap-10 md:gap-20 justify-center items-center">
        <MainLogo />

        <h1 className="text-xl md:text-4xl font-bold">ورود | ثبت نام</h1>

        <Tabs
          defaultValue="owner-tenant-form"
          className="w-full gap-6"
          dir="rtl"
        >
          <TabsList className="w-full">
            <TabsTrigger value="owner-tenant-form">مالک | مستاجر</TabsTrigger>
            <TabsTrigger value="estate-agency-form">آژانس املاک</TabsTrigger>
          </TabsList>

          <QueryProvider>
            <OwnerTenantForm />

            <EstateAgencyForm />
          </QueryProvider>
        </Tabs>
      </div>
    </section>
  );
};

export default LoginRegisterPage;
