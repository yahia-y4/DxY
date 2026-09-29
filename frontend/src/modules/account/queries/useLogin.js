import { loginAPI } from "../API/loginAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data.doctor);
    },
  });
}
