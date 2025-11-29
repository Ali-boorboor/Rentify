import * as Yup from "yup";

const PERSIAN_TEXT_WITH_NUMBERS_REGEX =
  /^[\u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06A9\u06AF\u06CC][\u0600-\u06FF0-9۰-۹\u200C\s\.,]*$/u;

const propertyDescriptionValidations = Yup.object().shape({
  descriptionMessage: Yup.string()
    .matches(
      PERSIAN_TEXT_WITH_NUMBERS_REGEX,
      "توضیحات آگهی باید فقط شامل حروف فارسی باشد"
    )
    .required("وارد کردن توضیحات آگهی الزامی است"),

  propertyTitle: Yup.string()
    .matches(
      PERSIAN_TEXT_WITH_NUMBERS_REGEX,
      "عنوان آگهی باید فقط شامل حروف فارسی باشد"
    )
    .required("وارد کردن عنوان آگهی الزامی است"),

  isPropertyReadyToBeUsed: Yup.boolean(),
});

export default propertyDescriptionValidations;
