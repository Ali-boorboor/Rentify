import React from "react";
import UserModel from "@models/User";
import connectToDB from "@configs/database";
import FavouriteModel from "@models/Favourite";
import authenticate from "@/utils/authenticate";
import PropertyCard from "@/components/ui/PropertyCard";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";
import { parseJson } from "@/utils/json";

const FavouritesPage = async () => {
  connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser.phone,
  }).lean();

  const favouriteProperties = await FavouriteModel.findOne({
    user: user?._id,
  })
    .populate({
      path: "properties",
      populate: [
        { path: "address", populate: "province" },
        { path: "propertyDetails", populate: "propertyCategory" },
      ],
    })
    .lean();

  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های ذخیره شده
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        {favouriteProperties?.properties?.length ? (
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {favouriteProperties?.properties?.map((property) => (
              <PropertyCard
                propertyCategory={parseJson(
                  property.propertyDetails.propertyCategory
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
      </div>
    </section>
  );
};

export default FavouritesPage;
