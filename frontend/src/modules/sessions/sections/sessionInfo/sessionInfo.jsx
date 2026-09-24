import "./sessionInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoWin from "../../../../components/infoWin/infoWin";
import ShowToothWin from "../../../../components/showToothWin/showToothWin";
import { useSession } from "../../context/useSession";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import { formatDate } from "../../../../helperFunctions/formatDate";
import IconButton from "../../../../components/iconButton/iconButton";
import { useDeleteSession } from "../../queries/useDeleteSession";
import { useWarning } from "../../../../context/warningContext/useWarning";
export default function SessionInfo() {
  const {selectedSession,setCurrentSession} = useSession()
 const{showWarning} = useWarning()
   const deleteSession = useDeleteSession()



  //functions
  function handleDelete(){
    deleteSession.mutate(selectedSession.id,{
      onSettled:()=>{
        back();
      }
    })
  }
  function handleDeleteClick(){
    const deleteText ="هل تريد حذف هذه الجلسة ؟؟"
    showWarning(deleteText,handleDelete)

  }
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
          <IconButton onClick={handleDeleteClick} icon={ <DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />}/>
          <IconButton onClick={back} icon={<ArrowBackIcon style={{ fontSize: "27" }} />}/>
        </div>
        <div className="content">
            <InfoWin  data={selectedSession.name}/>
            <InfoWin  data={`${selectedSession.patient.name} ${selectedSession.patient.father_name} ${selectedSession.patient.nick_name}`}/>
            <InfoWin  data={formatDate(selectedSession.created_at)}/>
            <ShowToothWin number={selectedSession.teeth_number} horizontal={selectedSession.teeth_horizontal} vertical={selectedSession.teeth_vertical}/>
        </div>
      </section>
      <section className="section-2">
        <InfoWin lable={"التشخيص : "} data={selectedSession.diagnosis} h={"150px"} w={"100%"}/>
        <InfoWin lable={"المعالجة : "} data={selectedSession.treatment} h={"150px"} w={"100%"}/>
        <InfoWin lable={"الادوية الموصوفة : "} data={selectedSession.prescribed_medication} h={"150px"} w={"100%"}/>
        <InfoWin lable={"الوصف : "} data={selectedSession.description} h={"150px"} w={"100%"}/>
      </section>
    </div>
  );
}
