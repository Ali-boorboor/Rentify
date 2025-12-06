import * as Yup from "yup";

const ONLY_PERSIAN_LETTERS_REGEX =
  /^[\u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06A9\u06AF\u06CC]+$/u;

const PHONE_REGEX = /^۰۹[۰-۹]{9}$/;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PERSIAN_TEXT_WITH_NUMBERS_REGEX =
  /^[\u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06A9\u06AF\u06CC][\u0600-\u06FF0-9۰-۹\u200C\s\.,]*$/u;

const contactUsMessageValidations = Yup.object().shape({
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

  email: Yup.string()
    .nullable()
    .notRequired()
    .test("is-valid-email", "ایمیل نامعتبر است.", (value) => {
      if (!value) return true;
      return EMAIL_REGEX.test(value);
    }),

  message: Yup.string()
    .matches(
      PERSIAN_TEXT_WITH_NUMBERS_REGEX,
      "پیام باید فقط شامل حروف فارسی باشد"
    )
    .required("وارد کردن پیام الزامی است"),
});

export { contactUsMessageValidations };
