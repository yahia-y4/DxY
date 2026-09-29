import "./patientSessionsInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "../../../../../../components/iconButton/iconButton";
import InfoWin from "../../../../../../components/infoWin/infoWin";
import ShowToothWin from "../../../../../../components/showToothWin/showToothWin";
import { useContext } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { handleArrayState } from "../../../../../../helperFunctions/handleArrayState";
import { formatDate } from "../../../../../../helperFunctions/formatDate";
import { useWarning } from "../../../../../../context/warningContext/useWarning";
import { useError } from "../../../../../../context/errorContext/useError";
import { useDeleteSession } from "../../../../../sessions/queries/useDeleteSession";
export default function PatientSessionsInfo() {
  const { setSelectedPatientSection, selectedSession } =
    useContext(PatientsContext);
  const { showWarning } = useWarning();
  const { showError } = useError();
  const deleteSession = useDeleteSession();

  // function
  function handleDelete() {
    deleteSession.mutate(selectedSession.id, {
      onSuccess: () => {
        back();
      },
      onError: () => {
        const text = "خطا في حذف هذه الجلسة!!";
        showError(text);
      },
    });
  }
  function handleDeleteClick() {
    const text = "هل تريد حذف هذه الجلسة ؟؟";
    showWarning(text, handleDelete);
  }
  function back() {
    handleArrayState(setSelectedPatientSection, 2, null);
  }
  function edit() {
    handleArrayState(setSelectedPatientSection, 3, "PatientSessionsEdit");
  }
  //
  return (
    <div className="patient-sessions-info">
      <section className="section-1">
        <div className="Control-buts">
          <IconButton
            onClick={edit}
            icon={<AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            onClick={handleDeleteClick}
            icon={<DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            onClick={back}
            icon={<ArrowBackIcon style={{ fontSize: "27" }} />}
          />
        </div>
        <div className="content">
          <InfoWin data={selectedSession.name} />

          <InfoWin data={formatDate(selectedSession.created_at)} />
          <ShowToothWin
            number={selectedSession.teeth_number}
            horizontal={selectedSession.teeth_horizontal}
            vertical={selectedSession.teeth_vertical}
          />
        </div>
      </section>
      <section className="section-2">
        <InfoWin
        notCenter={true}
          data={selectedSession.diagnosis}
          lable={"التشخيص : "}
          h={"120px"}
          w={"70%"}
        />
        <InfoWin
        notCenter={true}
          data={selectedSession.treatment}
          lable={"المعالجة : "}
          h={"120px"}
          w={"70%"}
        />
        <InfoWin
        notCenter={true}
          data={selectedSession.prescribed_medication}
          lable={"الادوية الموصوفة : "}
          h={"120px"}
          w={"70%"}
        />
        <InfoWin
        notCenter={true}
          data={selectedSession.description}
          lable={"الوصف  : "}
          h={"120px"}
          w={"70%"}
        />
      </section>
    </div>
  );
}
