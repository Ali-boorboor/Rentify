"use client";

import React from "react";
import Link from "next/link";
import * as icons from "lucide-react";
import * as table from "@/components/ui/table";
import PropertyCard from "@/components/ui/PropertyCard";
import filters from "@propertyComparison/constants/filters";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IProperty } from "@models/Property";
import { parseJson } from "@/utils/json";

interface TableProps {
  selectedProperties: IProperty[];
}

const Table = ({ selectedProperties }: TableProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const hasReachedMaxSelection = searchParams.getAll("properties").length === 3;

  const activeFilters = searchParams.getAll("filters");

  const selectedFilters = activeFilters.map((activeFilter) => {
    return filters.find((filter) => activeFilter === filter.enName);
  });

  const removePropertyCardHandler = (propertyID: string) => {
    const searchParam = new URLSearchParams(searchParams.toString());

    searchParam.delete("properties", propertyID);

    router.replace(`/property-comparison?${searchParam.toString()}`);
  };

  return (
    <table.Table>
      <table.TableHeader>
        <table.TableRow>
          <table.TableHead className="p-4">
            <div className="flex justify-center items-center bg-muted rounded-xl border shadow-sm h-80 sm:h-[28rem] p-4 aspect-[3/4]">
              {hasReachedMaxSelection ? (
                <Button
                  className="size-12"
                  variant="ternary"
                  size="icon"
                  disabled
                >
                  <icons.ReplaceAll className="size-1/2" />
                </Button>
              ) : (
                <Button
                  title="تغییر تمامی کارت‌ها"
                  className="size-12"
                  variant="ternary"
                  size="icon"
                  asChild
                >
                  <Link href="/property-comparison/search">
                    <icons.ReplaceAll className="size-1/2" />
                  </Link>
                </Button>
              )}
            </div>
          </table.TableHead>

          {selectedProperties.map((property) => (
            <table.TableHead className="p-4" key={property._id as string}>
              <PropertyCard
                hasRemoveButton
                title={property.title}
                image={property?.images?.[0]}
                rentAmount={property.rentAmount}
                propertyID={property._id as string}
                linkTo={`/properties/${property._id}`}
                mortgageAmount={property.mortgageAmount}
                className="aspect-[3/4] h-80 sm:h-[28rem]"
                province={property.address.province.faName}
                propertyCategory={parseJson(
                  property.propertyDetails.propertyCategory
                )}
                removeButtonHandler={() => {
                  removePropertyCardHandler(property._id as string);
                }}
              />
            </table.TableHead>
          ))}
        </table.TableRow>
      </table.TableHeader>

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
    </table.Table>
  );
};

export default Table;
