import { getTreatmentPlansAPI } from "../API/getTreatmentPlansAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const useGetTreatmentPlans = () => {
  const token = getToken();
  const query = useQuery({
    queryKey: ["treatmentPlans"],
    queryFn: getTreatmentPlansAPI,
    enabled: !!token,
    staleTime: Infinity,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
