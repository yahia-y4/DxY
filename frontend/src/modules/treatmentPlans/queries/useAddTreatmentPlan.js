import { addTreatmentPlanAPI } from "../API/addTreatmentPlanAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddTreatmentPlan() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTreatmentPlanAPI,
    onSuccess: (treatmentPlan) => {
      queryClient.setQueryData(["treatmentPlans"], (oldData) => {
        return [...oldData, treatmentPlan];
      });
    },
  });
}
