import { deleteSessionAPI } from "../API/deleteSessionAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteSession() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteSessionAPI,
        onSuccess: (id) => {
            queryClient.setQueryData(
                ["sessions"],
                (oldData = []) =>
                    oldData.filter((session) => session.id !== id)
            );
        },
    });
}