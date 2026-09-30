import "./treatmentPlansTable.css";
import Table from "../../../../components/table/table";
import Search from "../../../../components/search/search";
import { useGetTreatmentPlans } from "../../queries/useGetTreatmentPlans";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { formatDate } from "../../../../helperFunctions/formatDate";
import { useTreatmentPlan } from "../../context/useTreatmentPlan";
import { useState } from "react";
import { searchFun } from "../../../../helperFunctions/searchFun";
export default function TreatmentPlansTable() {
  const [searchValue, setSearchValue] = useState("");
  const { setCurrentTreatmentPlan, setSelectedTreatmentPlan } =
    useTreatmentPlan();
  const { data, isLoading, isError, error, hasToken } = useGetTreatmentPlans();
  useQueryUI({ isLoading, isError, error, hasToken });

  //functions
  function onRowClick(treatmentPlan) {
    setSelectedTreatmentPlan(treatmentPlan);
    setCurrentTreatmentPlan("treatmentPlanInfo");
  }
  function handleSearch(value) {
    setSearchValue(value);
  }
  function handleCancel() {
    setSearchValue("");
  }
  //--------

  const columns = [
    { name: "name", label: "الخطة" },
    {
      name: (treatmentPlan) => {
        const name = `${treatmentPlan.patient.name} ${treatmentPlan.patient.father_name} ${treatmentPlan.patient.nick_name}`;
        return name;
      },
      label: "المريض",
    },

    {
      name: (treatmentPlan) => formatDate(treatmentPlan.created_at),
      label: "تاريخ بدء الخطة",
    },
  ];

  const tableData = searchFun(data ?? [], searchValue, ["name"]);
  return (
    <div className="treatmentPlans-Table">
      <Search onSearch={handleSearch} onCancel={handleCancel} w={"90%"} />
      <Table
        onRowClick={onRowClick}
        data={tableData}
        columns={columns}
        w={"90%"}
      />
    </div>
  );
}
