import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import * as table from "@/components/ui/table";
import TableBody from "@propertyComparison/components/table/TableBody";
import TableHeader from "@propertyComparison/components/table/TableHeader";
import { parseJson } from "@/utils/json";

interface TableProps {
  searchParamProperties: string[];
}

const Table = async ({ searchParamProperties }: TableProps) => {
  connectToDB();

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
