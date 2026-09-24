import { addSessionAPI } from "../API/addSessionAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddSession() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSessionAPI,
    onSuccess: (newSessions) => {
      queryClient.setQueryData(["sessions"], (oldData) => {
        return [...oldData, newSessions];
      });
    },
  });
}
