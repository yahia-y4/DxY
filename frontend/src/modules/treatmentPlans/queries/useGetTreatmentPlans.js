import { getTreatmentPlansAPI } from "../API/getTreatmentPlansAPI";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../auth/token";
export const useGetSuseGetTreatmentPlansessions = () => {
  const token = getToken();
  const query = useQuery({
    queryKey: ["treatmentPlans"],
    queryFn: getTreatmentPlansAPI,
    enabled: !!token,
  });
  return {
    ...query,
    hasToken: !!token,
  };
};
