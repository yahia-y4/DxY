import { TreatmentPlansContext } from "./treatmentPlansContext";
import { useContext } from "react";

export function useTreatmentPlan() {
  return useContext(TreatmentPlansContext);
}
