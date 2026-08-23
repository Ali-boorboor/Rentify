import * as table from "@/components/ui/table";
import { parseJson } from "@/utils/json";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import TableBody from "@propertyComparison/components/table/TableBody";
import TableHeader from "@propertyComparison/components/table/TableHeader";

interface TableProps {
  searchParamProperties: string[];
}

const Table = async ({ searchParamProperties }: TableProps) => {
  await connectToDB();

  const selectedProperties = await PropertyModel.find({
    _id: { $in: searchParamProperties },
  })
    .populate({
      path: "propertyDetails",
      populate: [{ path: "propertyCategory" }, { path: "contractType" }],
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .lean();

  return (
    <table.Table>
      <TableHeader selectedProperties={parseJson(selectedProperties)} />

      <TableBody selectedProperties={parseJson(selectedProperties)} />
    </table.Table>
  );
};

export default Table;
