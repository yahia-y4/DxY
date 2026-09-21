// import TreatmentPlanAdd from "../sections/treatmentPlanAdd/treatmentPlanAdd";
import TreatmentPlansTable from "../sections/treatmentPlansTable/treatmentPlansTable";
// import SessionInfo from "../../sessions/sections/sessionInfo/sessionInfo";
// import TreatmentPlanInfo from "../sections/treatmentPlanInfo/treatmentPlanInfo";
// import SessionAdd from "../../sessions/sections/sessionAdd/sessionAdd";

import "./treatmentPlansPage.css";

export default function TreatmentPlansPage() {
  return (
    <div className="treatmentPlans-Page">
      {/* <TreatmentPlanAdd /> */}
      {/* <TreatmentPlanInfo /> */}
      <TreatmentPlansTable />


      {/* ---------بعدين ------------*/}
      {/* <SessionInfo/> */}
      {/* <SessionAdd/> */}
      {/* ------------------------ */}
    </div>
  );
}
