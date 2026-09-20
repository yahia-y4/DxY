import { PatientsContext } from "./patientsContext";
import { useState } from "react";
export const PatientsProvider = ({ children }) => {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [selectedPatientSection, setSelectedPatientSection] =
    useState("patientsTable"); // patientsTable || patientProfile  || patientAdd || patientProfile || patientProfileEdit

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
