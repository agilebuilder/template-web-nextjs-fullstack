/**
 * 合并 class 名，忽略空值。适合与 Tailwind CSS 搭配使用。
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * 将日期格式化为 YYYY-MM-DD。
 */
export function formatDate(date: Date | string) {
  const value = typeof date === "string" ? new Date(date) : date;
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
