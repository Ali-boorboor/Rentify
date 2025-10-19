import * as icon from "lucide-react";

const userPanelLinks = [
  {
    id: 1,
    title: "ویرایش اطلاعات",
    icon: <icon.CircleUserRound />,
    href: "/my-account/edit-infos",
  },
  {
    id: 2,
    title: "آگهی‌های ذخیره شده",
    icon: <icon.Heart />,
    href: "/my-account/favorites",
  },
  {
    id: 3,
    title: "آگهی‌های من",
    icon: <icon.Megaphone />,
    href: "/my-account/my-properties",
  },
  {
    id: 4,
    title: "مقایسه املاک",
    icon: <icon.TableProperties />,
    href: "/my-account/compare-properties",
  },
];

export default userPanelLinks;
