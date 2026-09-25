import ListButton from "../../../../components/listButton/listButton";
import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import "./appointmentsTable.css";
import { useAppo } from "../../context/useAppo";
import { useGetAppo } from "../../queries/useGetAppo";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { getDayName } from "../../../../helperFunctions/getDayName";
export default function AppointmentsTable() {
  const { setAppoSection, setSelectedAppo } = useAppo();
  const { data, isError, error, isLoading, hasToken } = useGetAppo();
  useQueryUI({ data, isError, error, isLoading, hasToken });

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
  //--------

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
        <Table
          onRowClick={onRowClick}
          data={data}
          columns={columns}
          w={"95%"}
        />
      </section>
    </div>
  );
}
