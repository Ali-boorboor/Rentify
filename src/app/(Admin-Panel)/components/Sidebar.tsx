import React from "react";
import LinkButtons from "@adminPanel/components/LinkButtons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 shrink-0 sticky -top-4 md:top-28 bg-card border shadow-sm rounded-xl px-4 py-4 md:py-8 z-40">
      <h1 className="text-center md:text-lg font-bold">
        <Link href="/admin-panel">پنل ادمین</Link>
      </h1>

      <Separator className="mb-6 mt-2" />

      <nav className="flex flex-wrap md:flex-col gap-6">
        <LinkButtons />
      </nav>
    </aside>
  );
};

export default Sidebar;
