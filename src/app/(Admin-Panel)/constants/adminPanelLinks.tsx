import { Check, Mail, X } from "lucide-react";

const adminPanelLinks = [
  {
    id: 1,
    faTitle: "تأیید آگهی‌های در انتظار",
    enTitle: "pendingAds",
    href: "/admin-panel/verify-pending-ads",
    icon: <Check />,
  },
  {
    id: 2,
    faTitle: "حذف آگهی‌های در انتظار",
    enTitle: "pendingAds",
    href: "/admin-panel/remove-pending-ads",
    icon: <X />,
  },
  {
    id: 2,
    faTitle: "پیام های ارتباط با ما",
    enTitle: "contactMessages",
    href: "/admin-panel/contact-messages",
    icon: <Mail />,
  },
];

export default adminPanelLinks;
