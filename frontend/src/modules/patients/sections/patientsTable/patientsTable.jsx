import AddButton from "../../../../components/addButton/addButton";
import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import "./patientsTable.css";
import {handleArrayState} from "../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../context/patientsContext";
import { useContext } from "react";
export default function PatientsTable() {
  const {
    setSelectedPatientId,
    setSelectedPatientSection,
  } = useContext(PatientsContext);
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
  const data = [
    {
      id: 1,
      name: "محمد",
      father_name: "أحمد",
      nick_name: "الأسرة",
      dirth_date: "01/01/1990",
      identity_card_number: "123456789",
    },
    {
      id: 2,
      name: "علي",
      father_name: "حسن",
      nick_name: "الأسرة",
      dirth_date: "02/02/1992",
      identity_card_number: "987654321",
    },
    {
      id: 3,
      name: "سارة",
      father_name: "محمد",
      nick_name: "الأسرة",
      dirth_date: "03/03/1994",
      identity_card_number: "456789123",
    },
    {
      id: 4,
      name: "أحمد",
      father_name: "علي",
      nick_name: "الأسرة",
      dirth_date: "04/04/1996",
      identity_card_number: "321654987",
    },
    {
      id: 5,
      name: "ليلى",
      father_name: "سعيد",
      nick_name: "الأسرة",
      dirth_date: "05/05/1998",
      identity_card_number: "654987321",
    },
    {
      id: 6,
      name: "خالد",
      father_name: "عبدالله",
      nick_name: "الأسرة",
      dirth_date: "06/06/2000",
      identity_card_number: "789123456",
    },
  ];

  return (
    <div className="patientsTable">
      <Search w={"70%"} />

      <Table onRowClick={handleRowClick} data={data} columns={columns} w={"70%"} h={"70%"}></Table>
      <AddButton onClick={()=>{handleArrayState(setSelectedPatientSection,0,"patientAdd")}} />
    </div>
  );

  
}
