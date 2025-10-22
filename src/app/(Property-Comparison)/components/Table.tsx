"use client";

import React from "react";
import * as table from "@/components/ui/table";
import PropertyCard from "@/components/ui/PropertyCard";
import { Plus, TextAlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";

const Table = () => {
  return (
    <table.Table>
      <table.TableHeader>
        <table.TableRow>
          <table.TableHead className="p-4">
            <div className="flex justify-center items-center bg-muted rounded-xl border shadow-sm h-80 sm:h-[28rem] p-4 aspect-[3/4]">
              {/* if there was 3 card already user cannot add another one and in that case make the button disabled ! */}
              <Button className="size-12" variant="ternary" size="icon">
                <Plus className="size-1/2" />
              </Button>
            </div>
          </table.TableHead>

          {[...Array(3)].map((_, index) => (
            <table.TableHead className="p-4" key={index}>
              <PropertyCard
                className="aspect-[3/4] h-80 sm:h-[28rem]"
                title="۷۰ متری‌۲‌خوابه - تهران محمدیه"
                mortgageAmount={4_000_000_000}
                removeButtonHandler={() => {}}
                rentAmount={50_000_000}
                location="تهران-الهیه"
                type="apartment"
                hasRemoveButton
              />
            </table.TableHead>
          ))}
        </table.TableRow>
      </table.TableHeader>

      <table.TableBody>
        {[...Array(4)].map((_, index) => (
          <table.TableRow className="text-center font-normal" key={index}>
            <table.TableCell className="font-semibold md:text-lg">
              <div className="flex justify-center items-center gap-2">
                <TextAlignJustify className="size-4.5 text-muted-foreground" />
                متراژ
              </div>
            </table.TableCell>
            <table.TableCell>۱۳۰ متر</table.TableCell>
            <table.TableCell>۱۵۰ متر</table.TableCell>
            <table.TableCell>۱۱۰ متر</table.TableCell>
          </table.TableRow>
        ))}
      </table.TableBody>
    </table.Table>
  );
};

export default Table;
