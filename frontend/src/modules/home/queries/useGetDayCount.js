import { getDayCountAPI } from "../API/getDayCountAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const useGetDayCount = () => {
  const token = getToken();
  const query = useQuery({
    queryKey: ["statisticsDayCount"],
    queryFn: getDayCountAPI,
    enabled: !!token,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
