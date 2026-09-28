import { useQuery } from "@tanstack/react-query";
import { getUserAPI } from "../API/getUserAPI";
import { getToken } from "../../../auth/token";

export function useAuthQuery() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: getUserAPI,
    enabled: !!getToken(),
    retry: false,
  });
}