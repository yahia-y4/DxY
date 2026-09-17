import "./appointmentInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import InfoWin from "../../../../components/infoWin/infoWin"
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
      <div className="content">
        <InfoWin data={"يحيى محمد الحمود"}/>
        <InfoWin data={"معالجة رحى ثانية لبية"}/>
        <InfoWin data={"منتظر"}/>
        <InfoWin data={"2026/9/20"}/>
        <InfoWin data={"السبت"}/>
        <InfoWin data={"12:30 PM"}/>
        
      </div>
    </div>
  );
}
