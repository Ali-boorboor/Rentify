import * as Yup from "yup";

const propertyEquipmentsValidations = Yup.object().shape({
  equipments: Yup.array()
    .min(1, "انتخاب حداقل یک مورد الزامی است")
    .required("انتخاب حداقل یک مورد الزامی است"),
});

export default propertyEquipmentsValidations;
