import { addPatientAPI } from "../API/addPatientAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreatePatient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPatientAPI,
    onSuccess: (newPatient) => {
      queryClient.setQueryData(["patients"], (oldData) => {
        return [...oldData, newPatient];
      });
    },
  });
}
