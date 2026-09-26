import { getFinanceAPI } from "../API/getFinanceAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const useGetFinance = () => {
  const token = getToken();
  const query = useQuery({
    queryKey: ["finance"],
    queryFn: getFinanceAPI,
    enabled: !!token,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
