const socialMedias = [
  {
    id: 1,
    alt: "telegram icon",
    image: "/images/svg/footer/telegram.svg",
  },
  {
    id: 2,
    alt: "linkedin icon",
    image: "/images/svg/footer/linkedin.svg",
  },
  {
    id: 3,
    alt: "facebook icon",
    image: "/images/svg/footer/facebook.svg",
  },
  {
    id: 4,
    alt: "instagram icon",
    image: "/images/svg/footer/instagram.svg",
  },
];

const enamadBadges = [
  {
    id: 1,
    alt: "real estate badge",
    image: "/images/svg/footer/real-estate-badge.svg",
  },
  {
    id: 2,
    alt: "enamad badge",
    image: "/images/svg/footer/enamad-badge.svg",
  },
  {
    id: 3,
    alt: "enamad badge",
    image: "/images/svg/footer/enamad.svg",
  },
];

const linkGroups = [
  {
    id: 1,
    title: "امکانات",
    links: [
      { id: "1-1", title: "رهن و اجاره‌ی خانه", href: "/properties" },
      {
        id: "1-2",
        title: "رهن و اجاره‌ی ویلا",
        href: "/properties?property-category=villa",
      },
      {
        id: "1-3",
        title: "رهن و اجاره‌ی آپارتمان",
        href: "/properties?property-category=apartment",
      },
      {
        id: "1-4",
        title: "رهن و اجاره‌ی خانه ویلایی",
        href: "/properties?property-category=villa-house",
      },
      {
        id: "1-5",
        title: "ثبت آگهی رایگان",
        href: "/property-registration/property-type",
      },
      { id: "1-6", title: "مقایسه املاک", href: "/property-comparison/search" },
    ],
  },
  {
    id: 2,
    title: "شرکت",
    links: [
      {
        id: "2-1",
        title: "ورود | ثبت نام",
        href: "/login-register",
      },
      { id: "2-2", title: "ارتباط با ما", href: "/contact-us" },
      { id: "2-3", title: "درباره ما", href: "/contact-us" },
    ],
  },
  {
    id: 3,
    title: "پشتیبانی",
    links: [
      { id: "3-1", title: "مرکز کمک", href: "/contact-us" },
      { id: "3-2", title: "گزارش اشکال", href: "/contact-us" },
      { id: "3-3", title: "پشتیبانی", href: "/contact-us" },
    ],
  },
  {
    id: 4,
    title: "ارتباط با ما",
    links: [
      { id: "4-1", title: "rentify@gmail.com", href: "#" },
      { id: "4-2", title: "۰۲۱-۴۳۵۳۶۳", href: "#" },
      { id: "4-3", title: "تهران - زعفرانیه - پلاک ۲۱۳", href: "#" },
    ],
  },
];

export { socialMedias, enamadBadges, linkGroups };
