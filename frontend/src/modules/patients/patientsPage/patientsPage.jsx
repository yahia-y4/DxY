
import Table from "../../../components/table/table";
import "./patientsPage.css";

export default function PatientsPage() {
    const columns = [
        { name: "name", label: "الاسم" },
        { name: "age", label: "العمر" },
        { name: "gender", label: "الجنس" },
        { name: "phone", label: "رقم الهاتف" },
    ];
    const data = [
        { name: "محمد", age: 25, gender: "ذكر", phone: "123456789" },
        { name: "أحمد", age: 30, gender: "ذكر", phone: "987654321" },
        { name: "سارة", age: 28, gender: "أنثى", phone: "456789123" },
    ];
  return (
    <div className="patientsPage">
        <div className="top-patients-control">

        </div>

        <div className="patients-content">
            --------
            <Table columns={columns} data={data}></Table>

        </div>
   
    </div>
  );
}