import "./sessionsTable.css";
import Table from "../../../../components/table/table";
import AddButton from "../../../../components/addButton/addButton";
import Search from "../../../../components/search/search";
import { useSession } from "../../context/useSession";
import { useGetSessions } from "../../queries/useGetSessions";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import { useQueryUI } from "../../../../hooks/useQueryUI";
export default function SectionsTable() {
  const columns = [
    { name: "id", label: "ID" },
    { name: "name", label: "الاسم" },
    { name: "father_name", label: "الاب" },
    { name: "nick_name", label: "الكنية" },
    { name: "sections_name", label: "الجلسة" },
    { name: "date", label: "تاريخ الجلسة" },
 
  ];

const {setCurrentSession,setSelectedSession} = useSession()
const {data ,isLoading,isError,error,hasToken} = useGetSessions()
useQueryUI({isLoading,isError,error,hasToken})

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
