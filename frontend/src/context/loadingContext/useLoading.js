import { useContext } from "react";
import { LoadingContext } from "./loadingContext";

export function useLoading() {
  return useContext(LoadingContext);
}
