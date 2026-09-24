import "./sessionInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoWin from "../../../../components/infoWin/infoWin";
import ShowToothWin from "../../../../components/showToothWin/showToothWin";
import { useSession } from "../../context/useSession";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import IconButton from "../../../../components/iconButton/iconButton";
export default function SessionInfo() {
  const {selectedSession,setCurrentSession} = useSession()
  console.log(selectedSession)
  //functions
  function back(){
    handleArrayState(setCurrentSession,0,"sessionsTable")
  }
  function edit(){
        handleArrayState(setCurrentSession,0,"sessionEdit")

  }
  //------
  return (
    <div className="session-Info">
      <section className="section-1">
        <div className="Control-buts">
    
          <IconButton onClick={edit} icon={<AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />}/>
          <IconButton icon={ <DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />}/>
          <IconButton onClick={back} icon={<ArrowBackIcon style={{ fontSize: "27" }} />}/>
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
