import buildFilters from "@api/properties/utils/buildFilters";
import PropertyModel from "@models/Property";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit")) || 8;
    const page = Number(searchParams.get("page")) || 1;

    const filterQuery = await buildFilters(searchParams);

    const properties = await PropertyModel.find(filterQuery)
      .populate({
        path: "propertyDetails",
        populate: { path: "propertyCategory" },
      })
      .populate({
        path: "address",
        populate: { path: "province" },
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    const totalDocuments = await PropertyModel.countDocuments(filterQuery);

    return Response.json({
      message: `all properties of page ${page} fetched successfully`,
      totalPages: Math.ceil(totalDocuments / limit),
      totalDocuments,
      properties,
      limit,
      page,
    });
  } catch (error) {
    return Response.json(
      { message: "internal server error!", error },
      { status: 500 }
    );
  }
};
