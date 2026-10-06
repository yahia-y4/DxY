import ListButton from "../../../../components/listButton/listButton";
import Table from "../../../../components/table/table";
import "./appointmentsTable.css";
import { useAppo } from "../../context/useAppo";
import { useGetAppo } from "../../queries/useGetAppo";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { getDayName } from "../../../../helperFunctions/getDayName";
import { getToday } from "../../../../helperFunctions/getToday";
import { useState } from "react";
export default function AppointmentsTable() {
  const { setAppoSection, setSelectedAppo } = useAppo();
  const { data , isError, error, isLoading, hasToken } = useGetAppo();
  useQueryUI({ data, isError, error, isLoading, hasToken });
  const [appoState,setAppoState] = useState("all") // all | day | approved | rejected | pending

  //functions
  function onRowClick(appo) {
    setSelectedAppo(appo);
    setAppoSection("appoInfo");
  }
  function handleStatus(status) {
    let _status = "انتظار";
    if (status == "approved") _status = "تم";
    else if (status == "rejected") _status = "ملغي";
    return _status;
  }
  function handleTableData(){
    if(appoState == "all"){
      return data;
    }
    if(appoState == "day"){
      const toDay = getToday();
      const newData = data.filter((i)=> i.appointment_date == toDay)
      return newData
    }
    return data.filter((i)=>i.status == appoState)
  }
  //--------




const tableData = handleTableData();
  const columns = [
    {
      name: (appo) => {
        return `${appo.patient.name} ${appo.patient.father_name} ${appo.patient.nick_name} `;
      },
      label: "المريض",
    },
    { name: "appointment_date", label: "تاريخ الموعد" },
    { name: (appo) => getDayName(appo.appointment_date), label: "اليوم" },
    { name: "hour", label: "الساعة" },
    { name: (appo)=>handleStatus(appo.status), label: "الحالة" },
    { name: "vist_reason", label: "سبب الحجز" },
  ];

  return (
    <div className="appointmentsTable">
      <section className="section-1">
        <div className="control-buts">
          <ListButton selected={appoState == "all"} onClick={()=>setAppoState("all")} label={"الكل"} />
          <ListButton selected={appoState == "day"} onClick={()=>setAppoState("day")} label={"مواعيد اليوم"} />
          <ListButton selected={appoState == "approved"} onClick={()=>setAppoState("approved")} label={"المواعيد التامة"} />
          <ListButton selected={appoState == "pending"} onClick={()=>setAppoState("pending")} label={"المواعيد المنتظرة"} />
          <ListButton selected={appoState == "rejected"} onClick={()=>setAppoState("rejected")} label={"المواعيد الملغية"} />
        </div>
        {/* <Search w={"40%"} /> */}
      </section>
      <section className="section-2">
        <Table
          onRowClick={onRowClick}
          data={tableData}
          columns={columns}
          w={"95%"}
        />
      </section>
    </div>
  );
}
