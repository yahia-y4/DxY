// import PatientEdit from "./patientEdit/patientEdit";
import "./patientProfile.css";
import PatientProfileInfo from "./patientProfileInfo/patientProfileInfo";
import { PatientsContext } from "../../context/patientsContext";
import { useContext } from "react";
import PatientEdit from "./patientEdit/patientEdit";
export default function PatientProfile() {
  const {selectedPatientSection} = useContext(PatientsContext);
  return (
    <div className="patient-Profile">
      <PatientProfileInfo />
      {selectedPatientSection[1] == "patientEdit" && <PatientEdit/>}
    </div>
  );
}
