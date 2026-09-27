import "./patientTreatmentPlansInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoWin from "../../../../../../components/infoWin/infoWin";
import IconButton from "../../../../../../components/iconButton/iconButton";
import { useContext } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { handleArrayState } from "../../../../../../helperFunctions/handleArrayState";
import { formatDate } from "../../../../../../helperFunctions/formatDate";
export default function PatientTreatmentPlansInfo() {
  const { setSelectedPatientSection, selectedTreatmentPlan } =
    useContext(PatientsContext);
  //functions
  function back() {
    handleArrayState(setSelectedPatientSection, 2, null);
  }
  function edit(){
        handleArrayState(setSelectedPatientSection, 3, "PatientTreatmentPlansEdit");

  }
  function status() {
  switch (selectedTreatmentPlan.status) {
    case "cancelled":
      return "ملغية";

    case "finished":
      return "تمت المعالجة";

    default:
      return "قيد المعالجة";
  }
}
  //
  return (
    <div className="patientTreatmentPlans-Info">
      <section className="section-1">
        <div className="control-buts">
          <IconButton onClick={edit} icon={<AppRegistrationOutlinedIcon />} />
          <IconButton icon={<DeleteOutlineOutlinedIcon />} />
          <IconButton onClick={back} icon={<ArrowBackIcon />} />
        </div>
        <div className="content-1">
          <InfoWin data={selectedTreatmentPlan.name} w={"300px"} />
          <InfoWin data={`${selectedTreatmentPlan.patient.name} ${selectedTreatmentPlan.patient.father_name} ${selectedTreatmentPlan.patient.nick_name} `} w={"200px"} />
          <InfoWin data={status()} w={"100px"} />
          <InfoWin data={formatDate(selectedTreatmentPlan.created_at)} w={"80px"} />
          <InfoWin title={"ID"} data={selectedTreatmentPlan.id} w={"50px"} />
        </div>
        <InfoWin h={"55%"} w={"100%"} />
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
