import { deleteTreatmentPlanAPI } from "../API/deleteTreatmentPlanAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTreatmentPlan() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTreatmentPlanAPI,
        onSuccess: (id) => {
            queryClient.setQueryData(
                ["treatmentPlans"],
                (oldData = []) =>
                    oldData.filter((treatmentPlan) => treatmentPlan.id !== id)
            );
        },
    });
}