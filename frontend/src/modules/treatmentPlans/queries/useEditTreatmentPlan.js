import { editTreatmentPlanAPI } from "../API/editTreatmentPlanAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditTreatmentPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTreatmentPlanAPI,

    onSuccess: (updatedTreatmentPlan) => {
      queryClient.setQueryData(["treatmentPlans"], (oldData = []) =>
        oldData.map((treatmentPlan) =>
          treatmentPlan.id === updatedTreatmentPlan.id
            ? updatedTreatmentPlan
            : treatmentPlan,
        ),
      );
    },
  });
}
