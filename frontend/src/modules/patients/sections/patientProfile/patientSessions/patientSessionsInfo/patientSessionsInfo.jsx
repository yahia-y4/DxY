
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
export default function PatientSessionsInfo() {
     const { setSelectedPatientSection} = useContext(PatientsContext)

     // function 
     function back(){
        handleArrayState(setSelectedPatientSection,2,null)
     }
     //
    return (
        <div className="patient-sessions-info">
        <section className="section-1">
        <div className="Control-buts">
    
          <IconButton icon={<AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />}/>
          <IconButton icon={<DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />}/>
          <IconButton onClick={back} icon={<ArrowBackIcon style={{ fontSize: "27" }}/>}/>
   
        </div>
        <div className="content">
            <InfoWin  data={"جلسة علاج طبيعي في السن الخلفي "}/>
           
            <InfoWin  data={"2026/9/15"}/>
            <ShowToothWin number={"7"} horizontal={"left"} vertical={"bottom"}/>
        </div>
      </section>
      <section className="section-2">
        <InfoWin lable={"التشخيص : "} h={"120px"} w={"70%"}/>
        <InfoWin lable={"المعالجة : "} h={"120px"} w={"70%"}/>
        <InfoWin lable={"الادوية الموصوفة : "} h={"120px"} w={"70%"}/>
        <InfoWin lable={"ملاحظة : "} h={"120px"} w={"70%"}/>
      </section>
        </div>
    );
}