import * as Yup from "yup";

const PERSIAN_TEXT_WITH_NUMBERS_REGEX =
  /^[\u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06A9\u06AF\u06CC][\u0600-\u06FF0-9۰-۹\u200C\s]*$/u;

const propertyLocationValidations = Yup.object().shape({
  province: Yup.string().required("انتخاب شهر الزامی است"),

  sideStreet: Yup.string()
    .matches(
      PERSIAN_TEXT_WITH_NUMBERS_REGEX,
      "نام خیابان فرعی یا کوچه باید فقط شامل حروف فارسی باشد"
    )
    .required("وارد کردن خیابان فرعی یا کوچه الزامی است"),

  mainStreet: Yup.string()
    .matches(
      PERSIAN_TEXT_WITH_NUMBERS_REGEX,
      "نام خیابان یا محله‌ی اصلی باید فقط شامل حروف فارسی باشد"
    )
    .required("وارد کردن خیابان یا محله‌ی اصلی الزامی است"),

  fullAddress: Yup.string()
    .matches(
      PERSIAN_TEXT_WITH_NUMBERS_REGEX,
      "آدرس دقیق و پلاک باید فقط شامل حروف فارسی باشد"
    )
    .required("وارد کردن آدرس دقیق و پلاک الزامی است"),
});

export default propertyLocationValidations;
