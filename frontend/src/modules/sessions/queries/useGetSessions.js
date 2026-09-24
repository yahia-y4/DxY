import { getSessionsAPI } from "../API/getSessionsAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const useGetSessions = () => {
  const token = getToken();
  const query = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessionsAPI,
    enabled: !!token,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
