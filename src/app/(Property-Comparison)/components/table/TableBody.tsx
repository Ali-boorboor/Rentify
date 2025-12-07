"use client";

import React from "react";
import * as table from "@/components/ui/table";
import filters from "@propertyComparison/constants/filters";
import { useSearchParams } from "next/navigation";
import { IProperty } from "@models/Property";

interface TableBodyProps {
  selectedProperties: IProperty[];
}

const TableBody = ({ selectedProperties }: TableBodyProps) => {
  const searchParams = useSearchParams();

  const activeFilters = searchParams.getAll("filters");

  const selectedFilters = activeFilters.map((activeFilter) => {
    return filters.find((filter) => activeFilter === filter.enName);
  });

  return (
    <table.TableBody>
      {selectedFilters.map((selectedFilter) => (
        <table.TableRow
          className="text-center font-normal"
          key={selectedFilter?.id}
        >
          <table.TableCell className="font-semibold md:text-lg">
            <div className="flex justify-center items-center gap-2 [&_svg]:size-4.5 [&_svg]:text-muted-foreground">
              {selectedFilter?.icon}
              {selectedFilter?.faName}
            </div>
          </table.TableCell>

          {selectedProperties.map((property) => (
            <table.TableCell key={property._id as string}>
              {selectedFilter?.getValue(property) || "- - -"}
            </table.TableCell>
          ))}
        </table.TableRow>
      ))}
    </table.TableBody>
  );
};

export default TableBody;
