import "./treatmentPlanInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import InfoWin from "../../../../components/infoWin/infoWin";
import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import AddButton from "../../../../components/addButton/addButton";
export default function TreatmentPlanInfo() {
  const columns = [
    { name: "id", label: "ID" },
    { name: "name", label: "Name" },
    { name: "age", label: "Age" },
    { name: "gender", label: "Gender" },
  ];
  const data = [
    { id: 1, name: "John Doe", age: 30, gender: "Male" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female" },
    { id: 3, name: "Alice Johnson", age: 28, gender: "Female" },
  ];
  return (
    <div className="treatmentPlanInfo">
      <section className="section-1">
        <div className="control-buts">
          <AppRegistrationOutlinedIcon />
          <DeleteOutlineOutlinedIcon />
          <HighlightOffOutlinedIcon />
        </div>
        <div className="content-1">
          <InfoWin data={"زراعة 3 زرعات في الفك السفلي"} w={"300px"} />
          <InfoWin data={"يحيى محمد الحمود"} w={"200px"} />
          <InfoWin data={"قيد التنفيذ"} w={"100px"} />
          <InfoWin data={"2026/9/16 "} w={"80px"} />
        </div>
        <InfoWin h={"55%"} w={"100%"} />
      </section>
      <section className="section-2">
        <h3>{"جلسات هذه الخطة : "}</h3>
        <Search w={"85%"} />
        <Table data={data} columns={columns} w={"85%"} />
        <AddButton/>
      </section>
    </div>
  );
}
