import * as Yup from "yup";

const pendingAdsValidations = Yup.object().shape({
  properties: Yup.array()
    .min(1, "انتخاب حداقل یک مورد الزامی است")
    .required("انتخاب حداقل یک مورد الزامی است"),
});

export { pendingAdsValidations };
