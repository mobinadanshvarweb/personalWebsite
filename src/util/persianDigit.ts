export const persianDigit = (num: string) => {
  return num.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};
