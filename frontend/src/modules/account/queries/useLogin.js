import { loginAPI } from "../API/loginAPI";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: loginAPI,
  });
}
