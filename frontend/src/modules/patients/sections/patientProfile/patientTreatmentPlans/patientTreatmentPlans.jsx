import Table from "../../../../../components/table/table";
import ForwardIcon from '@mui/icons-material/Forward';
import IconButton from "../../../../../components/iconButton/iconButton";
import Search from "../../../../../components/search/search";
import "./patientTreatmentPlans.css";
import PatientTreatmentPlansAdd from "./patientTreatmentPlansAdd/patientTreatmentPlansAdd";
import PatientTreatmentPlansInfo from "./patientTreatmentPlansInfo/patientTreatmentPlansInfo";
import { useContext } from "react";
import { PatientsContext } from "../../../context/patientsContext";
import { handleArrayState } from "../../../../../helperFunctions/handleArrayState";
import {useGetTreatmentPlans} from "../../../../treatmentPlans/queries/useGetTreatmentPlans";
import { formatDate } from "../../../../../helperFunctions/formatDate";
export default function PatientTreatmentPlans() {

const {selectedPatientSection, setSelectedPatientSection,selectedPatient,setSelectedTreatmentPlan} = useContext(PatientsContext)
const {data:treatmentPlans = [] } = useGetTreatmentPlans()
const patientTreatmentPlans = treatmentPlans.filter((treatmentPlan)=>treatmentPlan?.patient_id == selectedPatient.id)
    const columns = [
    { name: "id", label: "ID" },
    { name: "name", label: "الخطة" },
    { name: (treatmentPlan)=> formatDate(treatmentPlan.created_at), label: "تاريخ بدء الخطة" },
  ];



  // functions 
  function back(){
    handleArrayState(setSelectedPatientSection,1,null)
    handleArrayState(setSelectedPatientSection,2,null)
  }

  function onRowClick(treatmentPlan){
     handleArrayState(setSelectedPatientSection,2,"PatientTreatmentPlansInfo")
     setSelectedTreatmentPlan(treatmentPlan);
     
  }
  //
  return (
    <div className="patient-treatment-plans">
     {/* <h3 className="patient-sessions-title"> خطط المريض الفلاني </h3> */}
     <div className="patient-treatment-plans-content">
      <div className="patient-treatment-plans-table">
        <div className="patient-treatment-plans-table-header">
           <IconButton onClick={back} icon={<ForwardIcon style={{fontSize:"35px"}} />} />
            <Search w={"95%"} />
        </div>
        <Table onRowClick={onRowClick} w={"95%"} columns={columns} data={patientTreatmentPlans}/>
      </div>
      <div className="patient-treatment-plans-add-info-div">
        { selectedPatientSection[2] == "PatientTreatmentPlansInfo" ?  <PatientTreatmentPlansInfo/>:<PatientTreatmentPlansAdd/>}
       
      </div>
     </div>
    </div>
  );
}
