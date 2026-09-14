// import PatientEdit from "./patientEdit/patientEdit";
import "./patientProfile.css";
import PatientProfileInfo from "./patientProfileInfo/patientProfileInfo";

export default function PatientProfile() {
  return (
    <div className="patient-Profile">
      <PatientProfileInfo />
      {/* <PatientEdit/> */}
    </div>
  );
}
