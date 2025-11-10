// import validateRequestBody from "@/utils/validateRequestBody";
import UserModel from "@models/User";
import AddressModel from "@models/Address";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";
import PropertyDetailModel from "@models/PropertyDetail";
import { parseFormData } from "@/utils/json";

import { Values as PropertyDescriptionValues } from "@propertyDescriptionRegistration/types";
import { Values as PropertyEquipmentsValues } from "@propertyEquipmentsRegistration/types";
import { Values as PropertyLocationValues } from "@propertyLocationRegistration/types";
import { Values as PropertyDetailsValues } from "@propertyDetailsRegistration/types";
import { Values as PropertyTypeValues } from "@propertyTypeRegistration/types";
import { LatLngExpression } from "leaflet";

export const POST = async (request: Request) => {
  try {
    connectToDB();

    const tokenPayload = await authenticate();

    let user = null;

    if (tokenPayload) {
      user = await UserModel.findOne({ phone: tokenPayload.phone });
    }

    const formData = await request.formData();

    const propertyTypeDatas = parseFormData(
      formData.get("propertyTypeDatas")
    ) as PropertyTypeValues;
    const propertyLocationDatas = parseFormData(
      formData.get("propertyLocationDatas")
    ) as PropertyLocationValues;
    const propertyLocationCoordinates = parseFormData(
      formData.get("propertyLocationCoordinates")
    ) as LatLngExpression;
    const propertyDetailsDatas = parseFormData(
      formData.get("propertyDetailsDatas")
    ) as PropertyDetailsValues;
    const propertyEquipmentsDatas = parseFormData(
      formData.get("propertyEquipmentsDatas")
    ) as PropertyEquipmentsValues;
    const propertyDescriptionDatas = parseFormData(
      formData.get("propertyDescriptionDatas")
    ) as PropertyDescriptionValues;
    const propertyImagesDatas = formData.getAll("propertyImagesDatas");

    const propertyAddress = await AddressModel.insertOne({
      ...propertyLocationDatas,
      propertyLocationCoordinates,
    });

    const propertyDetails = await PropertyDetailModel.insertOne({
      ...propertyDescriptionDatas,
      ...propertyDetailsDatas,
      ...propertyTypeDatas,
      equipments: propertyEquipmentsDatas.equipments,
      meterage: Number(propertyDetailsDatas.meterage),
      rentAmount: Number(propertyTypeDatas.rentAmount),
      mortgageAmount: Number(propertyTypeDatas.mortgageAmount),
    });

    await PropertyModel.create({
      title: propertyDescriptionDatas.propertyTitle,
      address: propertyAddress._id,
      propertyDetails: propertyDetails._id,
      user: user?._id,
    });

    return Response.json("ok", { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
