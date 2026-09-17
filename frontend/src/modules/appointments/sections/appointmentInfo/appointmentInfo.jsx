import "./appointmentInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function AppointmentInfo() {
  return (
    <div className="appointmentInfo">
      <div className="control-buts">
        <AppRegistrationOutlinedIcon />
        <DeleteOutlineOutlinedIcon />
        <CheckCircleOutlinedIcon />
        <CancelOutlinedIcon />
        <ArrowBackIcon />
      </div>
      <div className="content"></div>
    </div>
  );
}
