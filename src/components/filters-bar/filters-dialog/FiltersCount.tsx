import { toPersianDigits } from "@/utils/convertNumbers";
import { useSearchParams } from "next/navigation";

const countActiveFilters = (params: URLSearchParams) => {
  let count = 0;

  params.forEach((value) => {
    if (params.get("sort-by")) return null;
    else if (Array.isArray(value) && value.length > 0) count++;
    else if (Boolean(value)) count++;
  });

  return count;
};

const FiltersCount = () => {
  const params = useSearchParams();
  const count = countActiveFilters(params);

  if (count === 0) return null;

  return (
    <span className="absolute -top-2 -left-3 bg-destructive text-destructive-foreground w-6 h-6 flex justify-center items-center rounded-full border text-sm">
      {toPersianDigits(String(count))}
    </span>
  );
};

export default FiltersCount;
