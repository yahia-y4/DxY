import { useContext } from "react";
import { ErrorContext } from "./errorContext";

export function useError() {
  return useContext(ErrorContext);
}
