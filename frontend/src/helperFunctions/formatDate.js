export function formatDate(date, locale = "ar") {
  return new Date(date).toLocaleDateString(locale);
}