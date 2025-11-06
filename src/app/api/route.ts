import connectToDB from "@/configs/database";
// import PropertyModel from "@/models/Property";

export const GET = () => {
  try {
    connectToDB();

    // await PropertyModel.create([
    //   {
    //     title: "۷۰ متری‌۲‌خوابه - تهران محمدیه",
    //     location: "6905ef60e0d082a618278e4a",
    //     rentAmount: 50_000_000,
    //     mortgageAmount: 4_000_000_000,
    //     propertyStatus: "success",
    //     propertyCategory: "6905e820da505dff200f437c",
    //   },
    //   {
    //     title: "۸۰ متری‌۳‌خوابه - تهران",
    //     location: "6905ef60e0d082a618278e4a",
    //     rentAmount: 70_000_000,
    //     mortgageAmount: 7_000_000_000,
    //     propertyStatus: "success",
    //     propertyCategory: "6905e820da505dff200f437c",
    //   },
    //   {
    //     title: "۹۰ متری‌۳‌خوابه - تهران",
    //     location: "6905ef60e0d082a618278e4a",
    //     rentAmount: 76_000_000,
    //     mortgageAmount: 8_000_000_000,
    //     propertyStatus: "success",
    //     propertyCategory: "6905e820da505dff200f437c",
    //   },
    // ]);

    return Response.json("ok", { status: 201 });
  } catch (_) {
    return Response.json("not ok!", { status: 500 });
  }
};
