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
export default function PatientTreatmentPlans() {

const {selectedPatientSection, setSelectedPatientSection} = useContext(PatientsContext)


    const columns = [
    { name: "id", label: "ID" },
    { name: "treatment_plans_name", label: "الخطة" },
    { name: "date", label: "تاريخ بدء الخطة" },
  ];
  const data = [
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 1, treatment_plans_name: "جلسة علاج طبيعي", date: "2023-01-01" },
  
  ];


  // functions 
  function back(){
    handleArrayState(setSelectedPatientSection,1,null)
    handleArrayState(setSelectedPatientSection,2,null)
  }

  function onRowClick(){
     handleArrayState(setSelectedPatientSection,2,"PatientTreatmentPlansInfo")
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
        <Table onRowClick={onRowClick} w={"95%"} columns={columns} data={data}/>
      </div>
      <div className="patient-treatment-plans-add-info-div">
        { selectedPatientSection[2] == "PatientTreatmentPlansInfo" ?  <PatientTreatmentPlansInfo/>:<PatientTreatmentPlansAdd/>}
       
      </div>
     </div>
    </div>
  );
}
