import { deleteAppoAPI } from "../API/deleteAppoAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteAppo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteAppoAPI,
        onSuccess: (id) => {
            queryClient.setQueryData(
                ["appointments"],
                (oldData = []) =>
                    oldData.filter((appo) => appo.id !== id)
            );
        },
    });
}