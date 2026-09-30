import IconButton from "../../../../../components/iconButton/iconButton";
import Search from "../../../../../components/search/search";
import Table from "../../../../../components/table/table";
import "./patientSessions.css";
import PatientSessionsAdd from "./patientSessionsAdd/patientSessionsAdd";
import ForwardIcon from "@mui/icons-material/Forward";
import PatientSessionsInfo from "./patientSessionsInfo/patientSessionsInfo";
import { handleArrayState } from "../../../../../helperFunctions/handleArrayState";
import { useContext,useState } from "react";
import { PatientsContext } from "../../../context/patientsContext";
import { useGetSessions } from "../../../../sessions/queries/useGetSessions";
import { formatDate } from "../../../../../helperFunctions/formatDate";
import { searchFun } from "../../../../../helperFunctions/searchFun";
import PatientSessionsEdit from "./patientSessionsEdit/patientSessionsEdit";
export default function PatientSessions() {
  const {
    selectedPatientSection,
    setSelectedPatientSection,
    selectedPatient,
    setSelectedSession,
  } = useContext(PatientsContext);

  const { data: sessions = [] } = useGetSessions();
    const [searchValue, setSearchValue] = useState("");

  const patientSessions = sessions.filter(
    (session) => session.patient?.id === selectedPatient?.id
  );

  const columns = [
    { name: "id", label: "ID" },
    { name: "name", label: "الجلسة" },
    { name: (s)=> formatDate(s.created_at), label: "تاريخ الجلسة" },
  ];
  //functions 

  function back() {
    handleArrayState(setSelectedPatientSection, 1, null);
    handleArrayState(setSelectedPatientSection, 2, null);
  }
  function onRowClick(session) {
    handleArrayState(
      setSelectedPatientSection,
      2,
      "PatientSessionsInfo"
    );
    setSelectedSession(session);
  }
    function handleSearch(value) {
    setSearchValue(value);
  }
  function handleCancel() {
     setSearchValue("");
  }
  //-----------

  const tableData = searchFun(patientSessions ?? [],searchValue,["name"]);
  return (
    <div className="patient-sessions">
      <div className="patient-sessions-content">
        <div className="patient-sessions-table">
          <div className="patient-sessions-table-header">
            <IconButton
              onClick={back}
              icon={<ForwardIcon style={{ fontSize: "35px" }} />}
            />

            <Search onSearch={handleSearch} onCancel={handleCancel} w={"95%"} />
          </div>

          <Table
            onRowClick={onRowClick}
            data={tableData}
            columns={columns}
            w={"95%"}
          />
        </div>

        <div className="patient-sessions-add-info-div">
          {selectedPatientSection[2] === "PatientSessionsInfo" ? (
            <PatientSessionsInfo />
          ) : (
            <PatientSessionsAdd />
          )}
          {selectedPatientSection [3] == "PatientSessionsEdit" && <PatientSessionsEdit/>}
        </div>
      </div>
    </div>
  );
}