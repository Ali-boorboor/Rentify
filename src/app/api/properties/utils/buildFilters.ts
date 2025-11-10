import EquipmentAndFacilitieModel from "@models/EquipmentAndFacilitie";
import PropertyCategoryModel from "@models/PropertyCategory";
import PropertyDetailModel from "@models/PropertyDetail";
import ProvinceModel from "@models/Province";
import AddressModel from "@models/Address";
import UserModel from "@models/User";

const buildFilters = async (searchParams: URLSearchParams) => {
  const filters: Record<string, object> = {};

  const categorySlug = searchParams.get("property-category");
  if (categorySlug) {
    const category = await PropertyCategoryModel.findOne({
      enTitle: categorySlug,
    });

    if (category) {
      const propertyDetailIds = await PropertyDetailModel.find({
        propertyCategory: category._id,
      }).distinct("_id");

      filters.propertyDetails = { $in: propertyDetailIds };
    } else {
      filters.propertyDetails = { $in: [] };
    }
  }

  const provinceSlug = searchParams.get("province");
  if (provinceSlug) {
    const province = await ProvinceModel.findOne({
      enName: provinceSlug,
    });

    if (province) {
      const propertyAddressIds = await AddressModel.find({
        province: province._id,
      }).distinct("_id");

      filters.address = { $in: propertyAddressIds };
    } else {
      filters.address = { $in: [] };
    }
  }

  const mortgageMinAmountSlug = Number(searchParams.get("from-mortgage"));
  const mortgageMaxAmountSlug = Number(searchParams.get("to-mortgage"));
  if (mortgageMinAmountSlug || mortgageMaxAmountSlug) {
    filters.mortgageAmount = {
      $gte: mortgageMinAmountSlug || 0,
      $lte: mortgageMaxAmountSlug || 100_000_000_000,
    };
  }

  const rentMinAmountSlug = Number(searchParams.get("from-rent"));
  const rentMaxAmountSlug = Number(searchParams.get("to-rent"));
  if (rentMinAmountSlug || rentMaxAmountSlug) {
    filters.rentAmount = {
      $gte: rentMinAmountSlug || 0,
      $lte: rentMaxAmountSlug || 100_000_000_000,
    };
  }

  const meterageSlug = Number(searchParams.get("meterage"));
  if (meterageSlug) {
    const propertyMeterageDetailIds = await PropertyDetailModel.find({
      meterage: {
        $eq: meterageSlug || 0,
      },
    });

    if (propertyMeterageDetailIds.length) {
      filters.propertyDetails = { $in: propertyMeterageDetailIds };
    } else {
      filters.propertyDetails = { $in: [] };
    }
  }

  const roomsSlug = Number(searchParams.get("rooms"));
  if (roomsSlug) {
    const propertyRoomsDetailIds = await PropertyDetailModel.find({
      roomsCount: roomsSlug || "0",
    });

    if (propertyRoomsDetailIds.length) {
      filters.propertyDetails = { $in: propertyRoomsDetailIds };
    } else {
      filters.propertyDetails = { $in: [] };
    }
  }

  const equipmentsSlug = searchParams.getAll("facilities");
  if (equipmentsSlug.length) {
    const equipmentDocs = await EquipmentAndFacilitieModel.find({
      value: { $in: equipmentsSlug },
    }).select("_id");

    const equipmentIds = equipmentDocs.map((equipment) => equipment._id);

    const propertyEquipmentsDetailIds = await PropertyDetailModel.find({
      equipments: { $all: equipmentIds },
    }).distinct("_id");

    if (propertyEquipmentsDetailIds.length) {
      filters.propertyDetails = { $in: propertyEquipmentsDetailIds };
    } else {
      filters.propertyDetails = { $in: [] };
    }
  }

  const onlyWithImageSlug = searchParams.get("only-with-image");
  if (onlyWithImageSlug) {
    filters.images = { $exists: true, $ne: [] };
  }

  const onlyAgencySlug = searchParams.get("only-agency");
  if (onlyAgencySlug) {
    const usersWithAgencyIds = await UserModel.find({
      agencyName: { $exists: true, $ne: "" },
    }).distinct("_id");

    if (usersWithAgencyIds.length) {
      filters.user = { $in: usersWithAgencyIds };
    } else {
      filters.user = { $in: [] };
    }
  }

  return filters;
};

export default buildFilters;
