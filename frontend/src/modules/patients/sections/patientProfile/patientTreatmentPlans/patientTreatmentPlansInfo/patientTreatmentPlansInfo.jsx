import "./patientTreatmentPlansInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoWin from "../../../../../../components/infoWin/infoWin";
import IconButton from "../../../../../../components/iconButton/iconButton";
import { useContext } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { handleArrayState } from "../../../../../../helperFunctions/handleArrayState";
export default function PatientTreatmentPlansInfo() {
    const {setSelectedPatientSection} = useContext(PatientsContext)

    //functions
    function back(){
        handleArrayState(setSelectedPatientSection,2,null)
    }
    //
  return (
    <div className="patientTreatmentPlans-Info">
      <section className="section-1">
        <div className="control-buts">
     
          <IconButton icon={<AppRegistrationOutlinedIcon />}/>
          <IconButton icon={ <DeleteOutlineOutlinedIcon />}/>
          <IconButton onClick={back} icon={<ArrowBackIcon />}/>
        </div>
        <div className="content-1">
          <InfoWin data={"زراعة 3 زرعات في الفك السفلي"} w={"300px"} />
          <InfoWin data={"يحيى محمد الحمود"} w={"200px"} />
          <InfoWin data={"قيد التنفيذ"} w={"100px"} />
          <InfoWin data={"2026/9/16 "} w={"80px"} />
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
