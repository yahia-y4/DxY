import "./financeTable.css";
import Search from "../../../../components/search/search";
import ListButton from "../../../../components/listButton/listButton";
import Table from "../../../../components/table/table";
import { useGetFinance } from "../../queries/useGetFinance";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { formatDate } from "../../../../helperFunctions/formatDate";
import { useState } from "react";
export default function FinanceTable() {
const [financeState,setFinanceState] = useState("charges")
const finance = useGetFinance();

useQueryUI(finance);
let data = finance.data?.charges ?? [];

if(financeState == "payment"){
data = finance.data?.payment ?? [];
}

//functions
function handleFinanceState(){
  financeState == "payment"? setFinanceState("charges") : setFinanceState("payment");
}
//
  const columns = [
    { name: (finance)=>{
      return `${finance.patient.name} ${finance.patient.father_name} ${finance.patient.nick_name}`;
    },
     label: "الاسم" },
    { name: "amount", label: "المبلغ" },
    { name: (finance)=>formatDate(finance.created_at), label: "التاريخ" },
    { name: "note", label: "ملاحظة" },
  ];

  return (
    <div className="financeTable">
      <section className="section-1">
        <div className="financeTable-buts">
          <ListButton onClick={handleFinanceState} selected={financeState == "charges"} label={"الديون"} />
          <ListButton onClick={handleFinanceState} selected={financeState == "payment"} label={"الدفعات"} />
        </div>
        <Search />
      </section>
      <Table data={data} columns={columns} w={"95%"} />
    </div>
  );
}
