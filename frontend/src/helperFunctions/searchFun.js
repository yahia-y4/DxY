export function searchFun(data = [], value, columns = []) {
  return data.filter((item) => {
    return columns.some((column) => {
      return String(item[column] ?? "")
        .toLowerCase()
        .includes(String(value ?? "").toLowerCase());
    });
  });
}