// import AddPatient from "../sections/addPatient/addPatient";
// import PatientsTable from "../sections/patientsTable/patientsTable";
import PatientProfile from "../sections/patientProfile/patientProfile";
import "./patientsPage.css";

export default function PatientsPage() {
  return (
    <div className="patientsPage">
      {/* <PatientsTable /> */}
      {/* <AddPatient/> */}
      <PatientProfile/>
    </div>
  );
}
