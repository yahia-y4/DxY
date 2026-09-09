import Search from "../../../../components/search/search";
import Table from "../../../../components/table/table";
import "./patientsTable.css";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function PatientsTable() {
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
    <div className="patientsTable">
      <Search w={"70%"} />

      <Table data={data} columns={columns} w={"70%"} h={"70%"}></Table>

      <div className="patients-add-butn"><AddCircleOutlineOutlinedIcon style={{fontSize:40}}/></div>
    </div>
  );
}
