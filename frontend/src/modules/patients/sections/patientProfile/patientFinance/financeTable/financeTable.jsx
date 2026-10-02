import "./financeTable.css";
import Search from "../../../../../../components/search/search";
import ListButton from "../../../../../../components/listButton/listButton";
import Table from "../../../../../../components/table/table";
import { useGetFinance } from "../../../../../finance/queries/useGetFinance";
import { useQueryUI } from "../../../../../../hooks/useQueryUI";
import { formatDate } from "../../../../../../helperFunctions/formatDate";
import { useContext, useState } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { searchFun } from "../../../../../../helperFunctions/searchFun";
export default function FinanceTable() {
  const { selectedPatient } = useContext(PatientsContext);
  const [financeState, setFinanceState] = useState("charges");
  const [searchValue, setSearchValue] = useState("");
  const finance = useGetFinance();
  useQueryUI(finance);
  let charges = finance.data?.charges?.filter(
    (charge) => charge?.patient_id == selectedPatient?.id,
  );
  let payment = finance.data?.payment?.filter(
    (payment) => payment?.patient_id == selectedPatient?.id,
  );
  let data = financeState == "payment" ? payment : charges;
  //functions
  function handleFinanceState() {
    financeState == "payment"
      ? setFinanceState("charges")
      : setFinanceState("payment");
  }
  function handleSearch(value) {
    setSearchValue(value);
  }
  function handleCancel() {
    setSearchValue("");
  }
  //
  const columns = [
    { name: "amount", label: "المبلغ" },
    { name: (finance) => formatDate(finance.created_at), label: "التاريخ" },
    { name: "note", label: "ملاحظة" },
  ];
  const tableData = searchFun(data ?? [], searchValue, [
    "name",
    "amount",
    "note",
  ]);
  return (
    <div className="financeTable">
      <section className="section-1">
        <div className="financeTable-buts">
          <ListButton
            selected={financeState == "charges"}
            onClick={handleFinanceState}
            label={"الديون"}
          />
          <ListButton
            selected={financeState == "payment"}
            onClick={handleFinanceState}
            label={"الدفعات"}
          />
        </div>
        <Search onSearch={handleSearch} onCancel={handleCancel} />
      </section>
      <Table data={tableData} columns={columns} w={"95%"} />
    </div>
  );
}