import { AppoContext } from "./appoContext";
import { useState } from "react";

export function AppoProvider({ children }) {
  const [appoSection, setAppoSection] = useState("appoAdd"); //appoAdd | appoInfo | appoEdit
  const [selectedAppo, setSelectedAppo] = useState({});
  const [showAppo, setShowAppo] = useState("all");
  return (
    <AppoContext.Provider
      value={{
        appoSection,
        setAppoSection,
        selectedAppo,
        setSelectedAppo,
        showAppo,
        setShowAppo,
      }}
    >
      {children}
    </AppoContext.Provider>
  );
}
