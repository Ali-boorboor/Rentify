import EmptyPropertiesAlert from "@/components/empty-properties-alert";
import PropertyCard from "@/components/property-card";
import connectToDB from "@/configs/database";
import authenticate from "@/utils/authenticate";
import { parseJson } from "@/utils/json";
import FavouriteModel from "@models/Favourite";
import UserModel from "@models/User";

const PropertyCards = async () => {
  await connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser.phone,
  }).lean();

  const favouriteProperties = await FavouriteModel.findOne({
    user: user?._id,
  })
    .populate({
      path: "properties",
      match: { propertyStatus: "success" },
      populate: [
        { path: "address", populate: "province" },
        { path: "propertyDetails", populate: "propertyCategory" },
      ],
    })
    .lean();

  return (
    <>
      {favouriteProperties?.properties?.length ? (
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {favouriteProperties?.properties?.map((property) => (
            <PropertyCard
              propertyCategory={parseJson(
                property.propertyDetails.propertyCategory,
              )}
              province={property.address.province.faName}
              mortgageAmount={property.mortgageAmount}
              linkTo={`/properties/${property._id}`}
              propertyID={String(property._id)}
              rentAmount={property.rentAmount}
              key={property._id as string}
              title={property.title}
            />
          ))}
        </div>
      ) : (
        <EmptyPropertiesAlert
          description="از طریق آیکون «نشان‌کردن» می‌تونید آگهی‌های مورد نظرتون رو در این لیست ذخیره کنید."
          image="/images/png/user-panel/empty-favourites.png"
          title="شما هنوز آگهی‌ای رو ذخیره نکردید!"
          linkButtonText="مشاهده املاک"
        />
      )}
    </>
  );
};

export default PropertyCards;
