import * as Yup from "yup";

const DIGITS_REGEX = /^[0-9۰-۹,]+$/;

const propertyTypeValidations = Yup.object().shape({
  propertyCategory: Yup.string().required("نوع ملک را وارد کنید"),

  contractType: Yup.string().required("نوع قرارداد را وارد کنید"),

  mortgageAmount: Yup.string()
    .matches(DIGITS_REGEX, "مبلغ رهن باید فقط شامل اعداد (فارسی) باشد")
    .required("مبلغ رهن را وارد کنید"),

  rentAmount: Yup.string()
    .matches(DIGITS_REGEX, "مبلغ اجاره باید فقط شامل اعداد (فارسی) باشد")
    .required("مبلغ اجاره را وارد کنید"),

  isTransmutable: Yup.boolean(),
});

export default propertyTypeValidations;
