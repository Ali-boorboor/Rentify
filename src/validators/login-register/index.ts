import * as Yup from "yup";

const PERSIAN_CHARACTERS_REGEX = /^[\u0600-\u06FF\u200C\s]+$/u;
const PHONE_REGEX = /^۰۹[۰-۹]{9}$/;

const baseSchema = {
  name: Yup.string()
    .matches(PERSIAN_CHARACTERS_REGEX, "نام باید فقط شامل حروف فارسی باشد.")
    .required("وارد کردن نام الزامی است."),

  familyName: Yup.string()
    .matches(
      PERSIAN_CHARACTERS_REGEX,
      "نام خانوادگی باید فقط شامل حروف فارسی باشد."
    )
    .required("وارد کردن نام خانوادگی الزامی است."),

  phone: Yup.string()
    .matches(
      PHONE_REGEX,
      "شماره تلفن همراه باید با ۰۹ شروع شده و شامل ۱۱ رقم فارسی باشد."
    )
    .required("وارد کردن شماره تلفن همراه الزامی است."),
};

const estateAgencySchema = Yup.object().shape({
  ...baseSchema,

  agencyName: Yup.string()
    .matches(
      PERSIAN_CHARACTERS_REGEX,
      "نام دفتر املاک باید فقط شامل حروف فارسی باشد."
    )
    .required("وارد کردن نام دفتر املاک الزامی است."),
});

const ownerTenantSchema = Yup.object().shape({ ...baseSchema });

export { estateAgencySchema, ownerTenantSchema };
