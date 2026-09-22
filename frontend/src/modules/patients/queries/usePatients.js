import { getPatientsAPI } from "../API/getPatientsAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const usePatients = () => {
  const token = getToken();

  const query = useQuery({
    queryKey: ["patients"],
    queryFn: getPatientsAPI,
    enabled: !!token,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
