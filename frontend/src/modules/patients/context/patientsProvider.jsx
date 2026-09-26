import { PatientsContext } from "./patientsContext";
import { useState } from "react";
export const PatientsProvider = ({ children }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedPatientSection, setSelectedPatientSection] = useState([
    "patientsTable",
    null,
    null,
  ]);
  // [patientsTable || patientProfile  || patientAdd || patientProfile , ... ] index (0) = main section, index (1) = sub section
const [selectedSession,setSelectedSession] = useState({});
  return (
    <PatientsContext.Provider
      value={{
        selectedPatient,
        setSelectedPatient,
        selectedPatientSection,
        setSelectedPatientSection,
        selectedSession,
        setSelectedSession,

      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};
