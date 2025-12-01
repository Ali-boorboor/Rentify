import * as Yup from "yup";

const ONLY_PERSIAN_LETTERS_REGEX =
  /^[\u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06A9\u06AF\u06CC]+$/u;

const PHONE_REGEX = /^۰۹[۰-۹]{9}$/;

const PASSWORD_REGEX =
  /^(?=.*?[A-Za-z])(?=.*?[۰-۹0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

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

  password: Yup.string()
    .matches(
      PASSWORD_REGEX,
      "رمز عبور باید حداقل ۸ کاراکتر بوده و شامل حداقل یک حرف انگلیسی، یک عدد و یک کاراکتر خاص باشد."
    )
    .required("وارد کردن رمز عبور الزامی است."),
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

export { estateAgencySchema, ownerTenantSchema };
