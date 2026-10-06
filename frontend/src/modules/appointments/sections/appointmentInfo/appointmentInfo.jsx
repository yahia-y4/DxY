import "./appointmentInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppo } from "../../context/useAppo";
import InfoWin from "../../../../components/infoWin/infoWin";
import IconButton from "../../../../components/iconButton/iconButton";
import { getDayName } from "../../../../helperFunctions/getDayName";
import { useDeleteAppo } from "../../queries/useDeleteAppo";
import { useWarning } from "../../../../context/warningContext/useWarning";
import { useError } from "../../../../context/errorContext/useError";
export default function AppointmentInfo() {
  const { setAppoSection, selectedAppo } = useAppo();
  const { showWarning } = useWarning();
  const { showError } = useError();
  const deleteAppo = useDeleteAppo();

  //functions
  function handleDeleteAppo() {
    deleteAppo.mutate(selectedAppo.id, {
      onSuccess: () => {
        back();
      },
      onError: () => {
        const text = "خطا في حذف الموعد!!";
        showError(text);
      },
    });
  }

  function handleDeleteAppoClick() {
    const text = "هل تريد حذف الموعد بشكل نهائي";
    showWarning(text, handleDeleteAppo);
  }
  function back() {
    setAppoSection("appoAdd");
  }
  function edit() {
    setAppoSection("appoEdit");
  }
  function handleStatus(status) {
    let _status = "انتظار";
    if (status == "approved") _status = "تم";
    else if (status == "rejected") _status = "ملغي";
    return _status;
  }
  //-----
  return (
    <div className="appointmentInfo">
      <div className="control-buts">
        <IconButton onClick={edit} icon={<AppRegistrationOutlinedIcon />} />
        <IconButton
          onClick={handleDeleteAppoClick}
          icon={<DeleteOutlineOutlinedIcon />}
        />
        {/* <IconButton icon={<CheckCircleOutlinedIcon />} />
        <IconButton icon={<CancelOutlinedIcon />} /> */}
        <IconButton onClick={back} icon={<ArrowBackIcon />} />
      </div>
      <div className="content">
        <InfoWin
          data={`${selectedAppo.patient.name} ${selectedAppo.patient.father_name} ${selectedAppo.patient.nick_name}`}
        />
        <InfoWin data={selectedAppo.vist_reason} />
        <InfoWin data={handleStatus(selectedAppo.status)} />
        <InfoWin data={"2026/9/20"} />
        <InfoWin data={getDayName(selectedAppo.appointment_date)} />
        <InfoWin data={selectedAppo.hour} />
      </div>
    </div>
  );
}
