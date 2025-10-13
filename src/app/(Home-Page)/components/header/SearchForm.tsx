import React from "react";
import * as select from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <form className="bg-card text-card-foreground p-4 pl-28 rounded-4xl md:rounded-full overflow-hidden relative">
      <div className="flex flex-wrap items-center gap-4">
        <select.Select dir="rtl">
          <select.SelectTrigger className="w-36 grow lg:w-48 border-0 outline-0 md:shadow-none">
            <select.SelectValue placeholder="موقعیت مکانی" />
          </select.SelectTrigger>
          <select.SelectContent>
            <select.SelectItem value="tehran-niavaran">
              تهران - نیاوران
            </select.SelectItem>
          </select.SelectContent>
        </select.Select>

        <select.Select dir="rtl">
          <select.SelectTrigger className="w-36 grow lg:w-48 border-0 outline-0 md:shadow-none">
            <select.SelectValue placeholder="نوع ملک" />
          </select.SelectTrigger>
          <select.SelectContent>
            <select.SelectItem value="villa">ویلا</select.SelectItem>
            <select.SelectItem value="apartment">آپارتمان</select.SelectItem>
            <select.SelectItem value="villa-house">
              خانه ویلایی
            </select.SelectItem>
          </select.SelectContent>
        </select.Select>

        <select.Select dir="rtl">
          <select.SelectTrigger className="w-36 grow lg:w-48 border-0 outline-0 md:shadow-none">
            <select.SelectValue placeholder="نوع قرارداد" />
          </select.SelectTrigger>
          <select.SelectContent>
            <select.SelectItem value="mortgage">رهن</select.SelectItem>
            <select.SelectItem value="rent">اجاره</select.SelectItem>
          </select.SelectContent>
        </select.Select>
      </div>

      <Button
        className="rounded-none absolute left-0 top-0 h-full w-24"
        type="submit"
      >
        <Search className="size-4" />
        جستجو
      </Button>
    </form>
  );
};

export default SearchForm;
