import "./patientProfileInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AirlineSeatFlatAngledOutlinedIcon from "@mui/icons-material/AirlineSeatFlatAngledOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoWin from "../../../../../components/infoWin/infoWin";
import { handleArrayState } from "../../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../../context/patientsContext";
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import IconButton from "../../../../../components/iconButton/iconButton";
export default function PatientProfileInfo() {
  const { setSelectedPatientSection ,selectedPatientId} = useContext(PatientsContext);

const queryClient = useQueryClient();
const patients = queryClient.getQueryData(["patients"]);
const patient = patients?.find(
    (patient) => patient.id === selectedPatientId
);

  //functions
  function back() {
    handleArrayState(setSelectedPatientSection, 0, "patientsTable");
  }
  function handleEdit() {
    handleArrayState(setSelectedPatientSection, 1, "patientEdit");
  }
  function handleSessions() {
    handleArrayState(setSelectedPatientSection, 1, "patientSessions");
  }
  function handleTreatmentPlans() {
    handleArrayState(setSelectedPatientSection, 1, "PatientTreatmentPlans");
  }
  function handleFinance() {
    handleArrayState(setSelectedPatientSection, 1, "PatientFinance");
  }
  //-------

  return (
    <div className="Patient-Profile-Info">
      <section className="section-1">
        <div className="Profile-Control-buts">
          <IconButton
            onClick={handleEdit}
            icon={<AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            icon={<DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            icon={
              <AirlineSeatFlatAngledOutlinedIcon style={{ fontSize: "27" }} />
            }
            onClick={handleSessions}

          />
          <IconButton
          onClick={handleTreatmentPlans}
            icon={<LibraryBooksOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
          onClick={handleFinance}
            icon={<AttachMoneyOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            onClick={back}
            icon={<ArrowBackIcon style={{ fontSize: "27" }} />}
          />
        </div>
        <div className="section-content">
          <InfoWin  data={`${patient.name}  ${patient.father_name}  ${patient.nick_name} `} />
          {patient.identity_card_number && <InfoWin title={"رقم الهوية"} data={patient.identity_card_number} />}
          {patient.dirth_date && <InfoWin title={"تاريخ الميلاد"} data={patient.dirth_date} />}
          <InfoWin title={"الحالة"} data={patient.status} />
          <InfoWin title={"الديون"} data={`${patient.outstanding_balance} $`} />
        
        </div>
      </section>
      <section className="section-2">
        <InfoWin lable={"الحساسية"} data={patient.allergies} w={"100%"} h={"150px"} />
        <InfoWin lable={"الامراض المزمنة"} data={patient.chronic_diseases} w={"100%"} h={"150px"} />
        <InfoWin lable={"الادوية الحالية"} data={patient.current_medications} w={"100%"} h={"150px"} />
        <InfoWin lable={"الوصف"} data={patient.description} w={"100%"} h={"150px"} />
      </section>
    </div>
  );
}
