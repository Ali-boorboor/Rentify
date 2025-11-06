const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const ENGLISH_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function toPersianDigits(input: string): string {
  return input?.replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

export function toEnglishDigits(input: string): string {
  return input?.replace(/[۰-۹]/g, (digit) => {
    return ENGLISH_DIGITS[PERSIAN_DIGITS.indexOf(digit)];
  });
}
