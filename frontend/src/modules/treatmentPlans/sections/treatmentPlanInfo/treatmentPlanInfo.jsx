import "./treatmentPlanInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoWin from "../../../../components/infoWin/infoWin";
import { useTreatmentPlan } from "../../context/useTreatmentPlan";
import IconButton from "../../../../components/iconButton/iconButton";
import { formatDate } from "../../../../helperFunctions/formatDate";

export default function TreatmentPlanInfo() {
  const { setCurrentTreatmentPlan, selectedTreatmentPlan } = useTreatmentPlan();

  // functions

  function back() {
    setCurrentTreatmentPlan("treatmentPlanAdd");
  }
  //-------

  return (
    <div className="treatmentPlanInfo">
      <section className="section-1">
        <div className="control-buts">
          <IconButton
            icon={<AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            icon={<DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            onClick={back}
            icon={<ArrowBackIcon style={{ fontSize: "27" }} />}
          />
        </div>
        <div className="content-1">
          <InfoWin data={selectedTreatmentPlan.name} w={"300px"} />
          <InfoWin
            data={`${selectedTreatmentPlan.patient.name} ${selectedTreatmentPlan.patient.father_name} ${selectedTreatmentPlan.patient.nick_name}`}
            w={"200px"}
          />
          <InfoWin data={"قيد التنفيذ"} w={"100px"} />
          <InfoWin title={"تاريخ البدء"} data={formatDate(selectedTreatmentPlan.created_at)} w={"80px"} />
        </div>
        <InfoWin data={selectedTreatmentPlan.description} h={"55%"} w={"100%"} />
      </section>
      {/* <section className="section-2">
        <h3>{"جلسات هذه الخطة : "}</h3>
        <Search w={"85%"} />
        <Table data={data} columns={columns} w={"85%"} />
        <AddButton />
      </section> */}
    </div>
  );
}
