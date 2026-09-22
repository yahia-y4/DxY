import AddButton from "../../../../components/addButton/addButton";
import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import "./patientsTable.css";
import {handleArrayState} from "../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../context/patientsContext";
import { useContext ,useEffect} from "react";
import { usePatients } from "../../queries/usePatients";
import { useError } from "../../../../context/errorContext/useError";
export default function PatientsTable() {
const {data ,isLoading,isError,error,hasToken} = usePatients()
const {showError} = useError();
 //Context---
  const {
    setSelectedPatientId,
    setSelectedPatientSection,
  } = useContext(PatientsContext);
    //---------
  useEffect(()=>{
    if (!hasToken) {showError("خطا في ايجاد التوكن !!")}
    if (isError){showError(error.message)}
      

  },[data ,isLoading,isError,error,hasToken,showError])

if (isLoading) {
  return (
    <div>loading --- </div>
  )
}
console.log(data)
// functions 
  function handleRowClick(patientId) {
    setSelectedPatientId(patientId);
    handleArrayState(setSelectedPatientSection,0,"patientProfile");
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


  return (
    <div className="patientsTable">
      <Search w={"70%"} />

      <Table onRowClick={handleRowClick} data={data} columns={columns} w={"70%"} h={"70%"}></Table>
      <AddButton onClick={()=>{handleArrayState(setSelectedPatientSection,0,"patientAdd")}} />
    </div>
  );

  
}
