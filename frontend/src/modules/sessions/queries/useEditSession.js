import { editSessionAPI } from "../API/editSessionAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditSession() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editSessionAPI,

        onSuccess: (updatedSession) => {
            queryClient.setQueryData(
                ["sessions"],
                (oldData = []) =>
                    oldData.map((session) =>
                        session.id === updatedSession.id ? updatedSession: session
                    )
            );
        },
    });
}