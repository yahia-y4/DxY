import { PatientsContext } from "./patientsContext";
import { useState } from "react";
export const PatientsProvider = ({ children }) => {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [selectedPatientSection, setSelectedPatientSection] =
    useState(["patientsTable", null,null]); 
    // [patientsTable || patientProfile  || patientAdd || patientProfile , ... ] index (0) = main section, index (1) = sub section

  return (
    <PatientsContext.Provider
      value={{
        selectedPatientId,
        setSelectedPatientId,
        selectedPatientSection,
        setSelectedPatientSection,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};
