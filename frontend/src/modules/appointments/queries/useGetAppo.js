import { getAppoAPI } from "../API/getAppoAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const useGetAppo = () => {
  const token = getToken();
  const query = useQuery({
    queryKey: ["appointments"],
    queryFn:getAppoAPI ,
    enabled: !!token,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
