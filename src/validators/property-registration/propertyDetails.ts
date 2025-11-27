import * as Yup from "yup";

const DIGITS_REGEX = /^[0-9۰-۹,]+$/;

const propertyDetailsValidations = Yup.object().shape({
  roomsCount: Yup.string().required("انتخاب تعداد اتاق خواب الزامی است"),

  propertyAge: Yup.string().required("انتخاب سن بنا الزامی است"),

  propertyType: Yup.string().required("انتخاب نوع واحد الزامی است"),

  meterage: Yup.string()
    .matches(DIGITS_REGEX, "متراژ باید فقط شامل اعداد (فارسی) باشد")
    .required("وارد کردن متراژ زیر بنا الزامی است"),

  cardinalDirection: Yup.string().required(
    "انتخاب موقعیت جغرافیایی ملک الزامی است"
  ),

  floor: Yup.string().required("انتخاب طبقه ملک الزامی است"),

  floorsCount: Yup.string().required("انتخاب تعداد طبقات ساختمان الزامی است"),

  unitsCount: Yup.string().required("انتخاب تعداد واحد هر طبقه الزامی است"),
});

export default propertyDetailsValidations;
