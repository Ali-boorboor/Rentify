const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigits(input: string): string {
  return input?.replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}
