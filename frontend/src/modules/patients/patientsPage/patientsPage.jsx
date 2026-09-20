import AddPatient from "../sections/addPatient/addPatient";
import PatientsTable from "../sections/patientsTable/patientsTable";
import PatientProfile from "../sections/patientProfile/patientProfile";
import "./patientsPage.css";
import { PatientsContext } from "../context/patientsContext";
import { useContext } from "react";
export default function PatientsPage() {
  const { selectedPatientSection } = useContext(PatientsContext);
  return (
    <div className="patientsPage">
      {selectedPatientSection[0] == "patientsTable" && <PatientsTable />}
      {selectedPatientSection[0] == "patientAdd" && <AddPatient />}
      {selectedPatientSection[0] == "patientProfile" && <PatientProfile />}
    </div>
  );
}
