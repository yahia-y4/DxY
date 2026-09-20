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
      {selectedPatientSection == "patientsTable" && <PatientsTable />}
      {selectedPatientSection == "patientAdd" && <AddPatient />}
      {selectedPatientSection == "patientProfile" && <PatientProfile />}
    </div>
  );
}
