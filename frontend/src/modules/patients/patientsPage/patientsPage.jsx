import AddPatient from "../sections/addPatient/addPatient";
// import PatientsTable from "../sections/patientsTable/patientsTable";
import "./patientsPage.css";

export default function PatientsPage() {
  return (
    <div className="patientsPage">
      {/* <PatientsTable /> */}
      <AddPatient/>
    </div>
  );
}
