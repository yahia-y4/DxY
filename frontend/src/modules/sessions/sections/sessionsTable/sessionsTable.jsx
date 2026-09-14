import "./sessionsTable.css";
import Table from "../../../../components/table/table";
import AddButton from "../../../../components/addButton/addButton";
import Search from "../../../../components/search/search";
export default function SectionsTable() {
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
    <div className="sessionsTable">
      <Search w={"90%"} />
      <Table columns={columns} data={data} w={"90%"} />
      <AddButton />
    </div>
  );
}
