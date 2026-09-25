import TreatmentPlanAdd from "../sections/treatmentPlanAdd/treatmentPlanAdd";
import TreatmentPlansTable from "../sections/treatmentPlansTable/treatmentPlansTable";
import TreatmentPlanInfo from "../sections/treatmentPlanInfo/treatmentPlanInfo";
// import SessionAdd from "../../sessions/sections/sessionAdd/sessionAdd";
// import SessionInfo from "../../sessions/sections/sessionInfo/sessionInfo";

import "./treatmentPlansPage.css";
import { useTreatmentPlan } from "../context/useTreatmentPlan";
import TreatmentPlanEdit from "../sections/treatmentPlanEdit/treatmentPlanEdit";
export default function TreatmentPlansPage() {
  const{currentTreatmentPlan}=useTreatmentPlan()
  return (
    <div className="treatmentPlans-Page">
      {currentTreatmentPlan == "treatmentPlanAdd"  && <TreatmentPlanAdd/>}
      {(currentTreatmentPlan == "treatmentPlanInfo" || currentTreatmentPlan == "treatmentPlanEdit") && <TreatmentPlanInfo />}
      <TreatmentPlansTable />
      {currentTreatmentPlan == "treatmentPlanEdit" && <TreatmentPlanEdit/>}


      {/* ---------بعدين ------------*/}
      {/* <SessionInfo/> */}
      {/* <SessionAdd/> */}
      {/* ------------------------ */}
    </div>
  );
}
