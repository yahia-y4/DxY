import "./sessionInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import InfoWin from "../../../../components/infoWin/infoWin";
import ShowToothWin from "../../../../components/showToothWin/showToothWin";

export default function SessionInfo() {
  return (
    <div className="session-Info">
      <section className="section-1">
        <div className="Control-buts">
          <AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />
          <DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />
          <HighlightOffOutlinedIcon style={{ fontSize: "27" }} />
        </div>
        <div className="content">
            <InfoWin  data={"معاينة"}/>
            <InfoWin  data={"يحيى محمد الحمود"}/>
            <InfoWin  data={"2026/9/15"}/>
            <ShowToothWin number={"7"} horizontal={"left"} vertical={"bottom"}/>
        </div>
      </section>
      <section className="section-2">
        <InfoWin lable={"التشخيص : "} h={"150px"} w={"100%"}/>
        <InfoWin lable={"المعالجة : "} h={"150px"} w={"100%"}/>
        <InfoWin lable={"الادوية الموصوفة : "} h={"150px"} w={"100%"}/>
        <InfoWin lable={"ملاحظة : "} h={"150px"} w={"100%"}/>
      </section>
    </div>
  );
}
