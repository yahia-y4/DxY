import { deletePatientAPI } from "../API/deletePatientAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletePatient() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deletePatientAPI,
        onSuccess: (id) => {
            queryClient.setQueryData(
                ["patients"],
                (oldData = []) =>
                    oldData.filter((patient) => patient.id !== id)
            );
        },
    });
}