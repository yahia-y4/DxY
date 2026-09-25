import ListButton from "../../../../components/listButton/listButton";
import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import "./appointmentsTable.css";
import { useAppo } from "../../context/useAppo";
import { useGetAppo } from "../../queries/useGetAppo";
import { useQueryUI } from "../../../../hooks/useQueryUI";
export default function AppointmentsTable() {

const{setAppoSection,setSelectedAppo} = useAppo()
const {data,isError,error,isLoading,hasToken} =useGetAppo()
useQueryUI({data,isError,error,isLoading,hasToken})


//functions
function onRowClick(appo){
setSelectedAppo(appo);
setAppoSection("appoInfo")
}
//--------





      const columns = [
    { name: "name", label: "المريض" },
    { name: "date", label: "تاريخ الموعد" },
    { name: "day", label: "اليوم" },
    { name: "hour", label: "الساعة" },
    { name: "state", label: "الحالة" },
    { name: "reason", label: "سبب الحجز" },
  ];

  return (
    <div className="appointmentsTable">
      <section className="section-1">
        <div className="control-buts">
          <ListButton selected={true} label={"الكل"} />
          <ListButton label={"مواعيد اليوم"} />
          <ListButton label={"المواعيد التامة"} />
          <ListButton label={"المواعيد المنتظرة"} />
          <ListButton label={"المواعيد الملغية"} />
          <ListButton label={"اضافة موعد"} />
        </div>
        <Search w={"40%"} />
      </section>
      <section className="section-2">
         <Table  onRowClick={onRowClick} data={data} columns={columns} w={"95%"}/>
      </section>
    </div>
  );
}
