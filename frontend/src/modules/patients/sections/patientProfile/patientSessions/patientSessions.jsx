import IconButton from "../../../../../components/iconButton/iconButton";
import Search from "../../../../../components/search/search";
import Table from "../../../../../components/table/table";
import "./patientSessions.css";
import PatientSessionsAdd from "./patientSessionsAdd/patientSessionsAdd";
import ForwardIcon from '@mui/icons-material/Forward';
import PatientSessionsInfo from "./patientSessionsInfo/patientSessionsInfo";
import { handleArrayState } from "../../../../../helperFunctions/handleArrayState";
import { useContext } from "react";
import { PatientsContext } from "../../../context/patientsContext";
export default function PatientSessions() {
  const {selectedPatientSection, setSelectedPatientSection} = useContext(PatientsContext)
  const columns = [
    { name: "id", label: "ID" },
    { name: "sections_name", label: "الجلسة" },
    { name: "date", label: "تاريخ الجلسة" },
  ];
  const data = [
    { id: 1, sections_name: "جلسة علاج طبيعي", date: "2023-01-01" },
    { id: 2, sections_name: "جلسة علاج طبيعي", date: "2023-01-02" },
    { id: 3, sections_name: "جلسة علاج طبيعي", date: "2023-01-03" },
    { id: 4, sections_name: "جلسة علاج طبيعي", date: "2023-01-04" },
    { id: 5, sections_name: "جلسة علاج طبيعي", date: "2023-01-05" },
  ];

  // functions
  function back(){
    handleArrayState(setSelectedPatientSection,1,null)
    handleArrayState(setSelectedPatientSection,2,null)
  }
  function onRowClick(){
  handleArrayState(setSelectedPatientSection,2,"PatientSessionsInfo")
  }
  console.log()
  //
  return (
    <div className="patient-sessions">
      {/* <h3 className="patient-sessions-title"> جلسات المريض الفلاني </h3> */}
      <div className="patient-sessions-content">
        <div className="patient-sessions-table">
          <div className="patient-sessions-table-header">
            <IconButton onClick={back} icon={<ForwardIcon style={{fontSize:"35px"}} />} />
            <Search w={"95%"} />
          </div>

          <Table onRowClick={onRowClick} data={data} columns={columns} w={"95%"} />
        </div>
        <div className="patient-sessions-add-info-div">
          {selectedPatientSection[2] == "PatientSessionsInfo" ? <PatientSessionsInfo/> : <PatientSessionsAdd /> }
        </div>
      </div>
    </div>
  );
}
