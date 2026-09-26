import { addPaymentAPI } from "../API/addPaymentAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPaymentAPI,

    onSuccess: (newPayment) => {
      queryClient.setQueryData(["finance"], (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          payment: [...oldData.payment, newPayment],
        };
      });
    },
  });
}
