import fs from "node:fs";
import path from "node:path";
import UserModel from "@models/User";
import AddressModel from "@models/Address";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";
import PropertyDetailModel from "@models/PropertyDetail";
import { parseFormData } from "@/utils/json";
import { randomUUID } from "crypto";

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
    const propertyImagesDatas = formData.getAll(
      "propertyImagesDatas"
    ) as File[];

    const uploadedImages: string[] = [];
    const MAX_SIZE = 2 * 1024 * 1024;
    const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];

    for (const file of propertyImagesDatas) {
      if (file.size > MAX_SIZE) {
        return Response.json(
          { message: `image is too large, Max size is 2MB!` },
          { status: 400 }
        );
      }

      if (!ALLOWED_TYPES.includes(file.type)) {
        return Response.json(
          { message: `invalid file type!` },
          { status: 400 }
        );
      }

      const fileBuffer = Buffer.from(await file.arrayBuffer());

      const fileExtension = file.name.split(".").pop();

      const fileName = `${randomUUID()}.${fileExtension}`;

      const filePath = path.join(process.cwd(), "public", "uploads", fileName);

      await fs.promises.writeFile(filePath, fileBuffer);

      uploadedImages.push(`/uploads/${fileName}`);
    }

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
    });

    await PropertyModel.create({
      title: propertyDescriptionDatas.propertyTitle,
      address: propertyAddress._id,
      propertyDetails: propertyDetails._id,
      user: user?._id,
      rentAmount: Number(propertyTypeDatas.rentAmount),
      mortgageAmount: Number(propertyTypeDatas.mortgageAmount),
      images: uploadedImages,
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
