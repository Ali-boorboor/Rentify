import * as Yup from "yup";

const propertyComparisonValidations = Yup.object().shape({
  properties: Yup.array()
    .min(2, "انتخاب حداقل دو مورد الزامی است")
    .max(3, "حداکثر سه مورد قابل انتخاب است")
    .required("انتخاب حداقل دو مورد الزامی است"),
});

export { propertyComparisonValidations };
