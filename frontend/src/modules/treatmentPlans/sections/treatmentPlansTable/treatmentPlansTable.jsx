import "./treatmentPlansTable.css";
import Table from "../../../../components/table/table";
import Search from "../../../../components/search/search";
import { useGetTreatmentPlans } from "../../queries/useGetTreatmentPlans";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { formatDate } from "../../../../helperFunctions/formatDate";
import { useTreatmentPlan } from "../../context/useTreatmentPlan";
export default function TreatmentPlansTable() {
  const { setCurrentTreatmentPlan, setSelectedTreatmentPlan } =
    useTreatmentPlan();
  const { data, isLoading, isError, error, hasToken } = useGetTreatmentPlans();
  useQueryUI({ isLoading, isError, error, hasToken });

  //functions
  function onRowClick(treatmentPlan) {
    setSelectedTreatmentPlan(treatmentPlan);
    setCurrentTreatmentPlan("treatmentPlanInfo");
  }
  //--------

  //------------
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
  return (
    <div className="treatmentPlans-Table">
      <Search w={"90%"} />
      <Table onRowClick={onRowClick} data={data} columns={columns} w={"90%"} />
    </div>
  );
}
