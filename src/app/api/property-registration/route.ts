// import validateRequestBody from "@/utils/validateRequestBody";
import AddressModel from "@models/Address";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import PropertyDetailModel from "@models/PropertyDetail";
import { parseFormData } from "@/utils/json";

export const POST = async (request: Request) => {
  try {
    connectToDB();

    const formData = await request.formData();

    const propertyTypeDatas = parseFormData(
      formData.get("propertyTypeDatas")
    ) as object;
    const propertyLocationDatas = parseFormData(
      formData.get("propertyLocationDatas")
    ) as object;
    const propertyLocationCoordinates = parseFormData(
      formData.get("propertyLocationCoordinates")
    ) as object;
    const propertyDetailsDatas = parseFormData(
      formData.get("propertyDetailsDatas")
    ) as object;
    const propertyEquipmentsDatas = parseFormData(
      formData.get("propertyEquipmentsDatas")
    ) as { equipments: string[] };
    const propertyDescriptionDatas = parseFormData(
      formData.get("propertyDescriptionDatas")
    ) as { propertyTitle: string };
    const propertyImagesDatas = formData.getAll("propertyImagesDatas");

    const propertyAddress = await AddressModel.insertOne({
      ...propertyLocationDatas,
      propertyLocationCoordinates,
    });

    const propertyDetails = await PropertyDetailModel.insertOne({
      ...propertyTypeDatas,
      ...propertyDetailsDatas,
      ...propertyDescriptionDatas,
      equipments: propertyEquipmentsDatas.equipments,
    });

    await PropertyModel.create({
      title: propertyDescriptionDatas.propertyTitle,
      address: propertyAddress._id,
      propertyDetails: propertyDetails._id,
    });

    return Response.json("ok", { status: 201 });
  } catch (error) {
    console.log("error =>", error);
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
