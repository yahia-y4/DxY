import AddButton from "../../../../components/addButton/addButton";
import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import "./patientsTable.css";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../context/patientsContext";
import { useContext, useState } from "react";
import { usePatients } from "../../queries/usePatients";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { searchFun } from "../../../../helperFunctions/searchFun";
export default function PatientsTable() {
  const { data, isLoading, isError, error, hasToken } = usePatients();
  useQueryUI({ isLoading, isError, error, hasToken });
  const [searchValue, setSearchValue] = useState("");

  //Context---
  const { setSelectedPatient, setSelectedPatientSection } =
    useContext(PatientsContext);
  //---------

  // functions
  function handleRowClick(patient) {
    setSelectedPatient(patient);
    handleArrayState(setSelectedPatientSection, 0, "patientProfile");
  }

  function handleSearch(value) {
    setSearchValue(value);
  }
  function handleCancel() {
     setSearchValue("");
  }

  //------

  const columns = [
    { name: "id", label: "ID" },
    { name: "name", label: "الاسم" },
    { name: "father_name", label: "الاب" },
    { name: "nick_name", label: "العائلة" },
    { name: "dirth_date", label: "تاريخ الميلاد" },
    { name: "identity_card_number", label: "رقم الهوية" },
  ];
  const tableData = searchFun(data ?? [],searchValue,["name","father_name","nick_name","identity_card_number"]);
  return (
    <div className="patientsTable">
      <Search onCancel={handleCancel} onSearch={handleSearch} w={"50%"} />

      <Table
        onRowClick={handleRowClick}
        data={tableData}
        columns={columns}
        w={"90%"}
        h={"70%"}
      ></Table>
      <AddButton
        onClick={() => {
          handleArrayState(setSelectedPatientSection, 0, "patientAdd");
        }}
      />
    </div>
  );
}
