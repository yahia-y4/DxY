import { addAppoAPI } from "../API/addAppoAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddAppo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addAppoAPI,
    onSuccess: (newAppo) => {
      queryClient.setQueryData(["appointments"], (oldData) => {
        return [...oldData, newAppo];
      });
    },
  });
}
