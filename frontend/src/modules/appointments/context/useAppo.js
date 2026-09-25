import { useContext } from "react";
import { AppoContext } from "./appoContext";
export function useAppo() {
  return useContext(AppoContext);
}
