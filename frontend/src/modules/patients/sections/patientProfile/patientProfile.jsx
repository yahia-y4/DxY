// import PatientEdit from "./patientEdit/patientEdit";
import "./patientProfile.css";
import PatientProfileInfo from "./patientProfileInfo/patientProfileInfo";
import { PatientsContext } from "../../context/patientsContext";
import { useContext } from "react";
import PatientEdit from "./patientEdit/patientEdit";
import PatientSessions from "./patientSessions/patientSessions";
export default function PatientProfile() {
  const {selectedPatientSection} = useContext(PatientsContext);
  return (
    <div className="patient-Profile">
      {selectedPatientSection[1] != "patientSessions" && <PatientProfileInfo />}
      {selectedPatientSection[1] == "patientEdit" && <PatientEdit/>}
      {selectedPatientSection[1] == "patientSessions" && <PatientSessions/>}
    </div>
  );
}
