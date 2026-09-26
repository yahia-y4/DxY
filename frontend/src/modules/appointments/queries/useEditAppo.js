import { editAppoAPI } from "../API/editAppoAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditAppo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editAppoAPI,

    onSuccess: (updatedAppo) => {
      queryClient.setQueryData(["appointments"], (oldData = []) =>
        oldData.map((appo) =>
          appo.id === updatedAppo.id ? updatedAppo : appo,
        ),
      );
    },
  });
}
