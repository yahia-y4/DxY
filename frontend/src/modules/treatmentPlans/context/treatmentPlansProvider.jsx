import { TreatmentPlansContext } from "./treatmentPlansContext";
import { useState } from "react";

export function TreatmentPlansProvider({children}){
    const [selectedTreatmentPlan,setSelectedTreatmentPlan] = useState({}); 
    const [currentTreatmentPlan,setCurrentTreatmentPlan] = useState("treatmentPlanAdd") // treatmentPlanAdd || treatmentPlanInfo
    return(
        <TreatmentPlansContext.Provider value={{
            selectedTreatmentPlan,
            setSelectedTreatmentPlan,
            currentTreatmentPlan,
            setCurrentTreatmentPlan
        }}>
           {children}
        </TreatmentPlansContext.Provider>
    )
}