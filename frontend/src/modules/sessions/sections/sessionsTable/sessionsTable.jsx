import "./sessionsTable.css";
import Table from "../../../../components/table/table";
import AddButton from "../../../../components/addButton/addButton";
import Search from "../../../../components/search/search";
import { useSession } from "../../context/useSession";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
export default function SectionsTable() {
  const columns = [
    { name: "id", label: "ID" },
    { name: "name", label: "الاسم" },
    { name: "father_name", label: "الاب" },
    { name: "nick_name", label: "الكنية" },
    { name: "sections_name", label: "الجلسة" },
    { name: "date", label: "تاريخ الجلسة" },
 
  ];
  const data = [
    {id: 1, name: "محمد", father_name: "احمد", nick_name: "ابو احمد", sections_name: "جلسة علاج طبيعي", date: "2023-01-01"},
    {id: 2, name: "علي", father_name: "حسن", nick_name: "ابو حسن", sections_name: "جلسة علاج طبيعي", date: "2023-01-02"},
    {id: 3, name: "سارة", father_name: "محمد", nick_name: "ام محمد", sections_name: "جلسة علاج طبيعي", date: "2023-01-03"},
    {id: 4, name: "أحمد", father_name: "علي", nick_name: "ابو علي", sections_name: "جلسة علاج طبيعي", date: "2023-01-04"},
    {id: 5, name: "فاطمة", father_name: "حسن", nick_name: "ام حسن", sections_name: "جلسة علاج طبيعي", date: "2023-01-05"},
  ];
  
const {setCurrentSession,setSelectedSession} = useSession()

  // functions
  function onRowClick(session) {
    setSelectedSession(session)
    handleArrayState(setCurrentSession,0,"sessionInfo")
  }
  function addSession(){
    handleArrayState(setCurrentSession,0,"sessionAdd")
  }
  //
 
  return (
    <div className="sessionsTable">
      <Search w={"90%"} />
      <Table onRowClick={onRowClick} columns={columns} data={data} w={"90%"} />
      <AddButton onClick={addSession} />
    </div>
  );
}
