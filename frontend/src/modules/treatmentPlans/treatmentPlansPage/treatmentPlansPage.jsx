
import TreatmentPlanAdd from "../sections/treatmentPlanAdd/treatmentPlanAdd"
import TreatmentPlansTable from "../sections/treatmentPlansTable/treatmentPlansTable"
import "./treatmentPlansPage.css"

export default function TreatmentPlansPage(){
return(
    <div className="treatmentPlans-Page">
        <TreatmentPlanAdd/>
        <TreatmentPlansTable/>
    </div>
)
}