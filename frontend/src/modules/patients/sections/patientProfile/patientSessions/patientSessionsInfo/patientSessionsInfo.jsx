
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
export default function PatientSessionsInfo() {
     const { setSelectedPatientSection,selectedSession} = useContext(PatientsContext)
     console.log(selectedSession)

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
            <InfoWin  data={selectedSession.name}/>
           
            <InfoWin  data={formatDate(selectedSession.created_at)}/>
            <ShowToothWin number={selectedSession.teeth_number} horizontal={selectedSession.teeth_horizontal} vertical={selectedSession.teeth_vertical}/>
        </div>
      </section>
      <section className="section-2">
        <InfoWin data={selectedSession.diagnosis} lable={"التشخيص : "} h={"120px"} w={"70%"}/>
        <InfoWin data={selectedSession.treatment} lable={"المعالجة : "} h={"120px"} w={"70%"}/>
        <InfoWin data={selectedSession.prescribed_medication} lable={"الادوية الموصوفة : "} h={"120px"} w={"70%"}/>
        <InfoWin data={selectedSession.description} lable={"الوصف  : "} h={"120px"} w={"70%"}/>
      </section>
        </div>
    );
}