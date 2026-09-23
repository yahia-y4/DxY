import { editPatientAPI } from "../API/editPatientAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditPatient() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editPatientAPI,

        onSuccess: (updatedPatient) => {
            queryClient.setQueryData(
                ["patients"],
                (oldData = []) =>
                    oldData.map((patient) =>
                        patient.id === updatedPatient.id ? updatedPatient: patient
                    )
            );
        },
    });
}