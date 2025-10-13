import { ReactNode } from "react";

interface LayoutProps {
  children: Readonly<ReactNode>;
}

type PropertyTypes = "villa-house" | "apartment" | "villa";

export type { LayoutProps, PropertyTypes };
