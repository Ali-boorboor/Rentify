import * as Yup from "yup";

const ONLY_PERSIAN_LETTERS_REGEX =
  /^[\u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06A9\u06AF\u06CC]+$/u;

const PHONE_REGEX = /^۰۹[۰-۹]{9}$/;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

const baseSchema = {
  name: Yup.string()
    .matches(ONLY_PERSIAN_LETTERS_REGEX, "نام باید فقط شامل حروف فارسی باشد.")
    .required("وارد کردن نام الزامی است."),

  familyName: Yup.string()
    .matches(
      ONLY_PERSIAN_LETTERS_REGEX,
      "نام خانوادگی باید فقط شامل حروف فارسی باشد."
    )
    .required("وارد کردن نام خانوادگی الزامی است."),

  phone: Yup.string()
    .matches(
      PHONE_REGEX,
      "شماره تلفن همراه باید با ۰۹ شروع شده و شامل ۱۱ رقم فارسی باشد."
    )
    .required("وارد کردن شماره تلفن همراه الزامی است."),

  email: Yup.string().matches(EMAIL_REGEX, "ایمیل نامعتبر است."),

  profileImage: Yup.mixed()
    .nullable()
    .test("fileSize", "حجم عکس نباید بیشتر از ۲ مگابایت باشد.", (file) => {
      if (!(file instanceof File)) return true;
      return file.size <= FILE_SIZE;
    })
    .test("fileFormat", "فرمت عکس‌ باید jpg، jpeg یا png باشد.", (file) => {
      if (!(file instanceof File)) return true;
      return SUPPORTED_FORMATS.includes(file.type);
    }),
};

const estateAgencySchema = Yup.object().shape({
  ...baseSchema,

  agencyName: Yup.string()
    .matches(
      ONLY_PERSIAN_LETTERS_REGEX,
      "نام دفتر املاک باید فقط شامل حروف فارسی باشد."
    )
    .required("وارد کردن نام دفتر املاک الزامی است."),
});

const ownerTenantSchema = Yup.object().shape({ ...baseSchema });

const editInfosApiValidations = Yup.object().shape({
  ...baseSchema,

  agencyName: Yup.string().matches(
    ONLY_PERSIAN_LETTERS_REGEX,
    "نام دفتر املاک باید فقط شامل حروف فارسی باشد."
  ),
});

export { estateAgencySchema, ownerTenantSchema, editInfosApiValidations };
