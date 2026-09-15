import "./treatmentPlansTable.css"
import Table from "../../../../components/table/table"
import Search from "../../../../components/search/search";

export default function TreatmentPlansTable(){
  const columns = [
    
    { name: "name", label: "الخطة" },
    { name: "patient", label: "المريض" }
  
  ];
  const data = [
    { id: 1, name: "زراعة 4 زرعات " , patient:"يحيى محمد الحمود"},
    { id: 1, name: "معالجة لبية للرحى الثانية ", patient:"احمد عدنان جاسم"},
    { id: 1, name: "زراعة 3 زرعات وتطعيم عظمي" ,patient:"محمد فاضل احمد"}
   
  
  ];

    return(
        <div className="treatmentPlans-Table">
            <Search w={"90%"}/>
            <Table data={data} columns={columns} w={"90%"}/>
           
        </div>
    )
}