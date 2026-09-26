import { addChargesAPI } from "../API/addChargesAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddCharges() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addChargesAPI,

    onSuccess: (newCharge) => {
      queryClient.setQueryData(["finance"], (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          charges: [...oldData.charges, newCharge],
        };
      });
    },
  });
}
