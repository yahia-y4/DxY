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
import { useWarning } from "../../../../../context/warningContext/useWarning";
import { useDeletePatient } from "../../../queries/useDeletePatient";
import IconButton from "../../../../../components/iconButton/iconButton";
export default function PatientProfileInfo() {
  const { setSelectedPatientSection, selectedPatient } =
    useContext(PatientsContext);
  const { showWarning } = useWarning();
  const deletePatient = useDeletePatient();

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
  function handleDelete(){
    deletePatient.mutate(selectedPatient.id,{
      onSuccess:()=>{
        console.log("Success delete")
        back()
      }
    })
  }

    function handleDeleteOnClick(){
      const deleteText ="هل تريد حذف هذا المريض بشكل كامل مع كل المعلومات المرتبطه به؟";
      showWarning(deleteText,handleDelete)
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
          onClick={handleDeleteOnClick}
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
          <InfoWin
            data={`${selectedPatient.name}  ${selectedPatient.father_name}  ${selectedPatient.nick_name} `}
          />
          {selectedPatient.identity_card_number && (
            <InfoWin
              title={"رقم الهوية"}
              data={selectedPatient.identity_card_number}
            />
          )}
          {selectedPatient.dirth_date && (
            <InfoWin
              title={"تاريخ الميلاد"}
              data={selectedPatient.dirth_date}
            />
          )}
          <InfoWin title={"الحالة"} data={selectedPatient.status} />
          <InfoWin
            title={"الديون"}
            data={`${selectedPatient.outstanding_balance} $`}
          />
        </div>
      </section>
      <section className="section-2">
        <InfoWin
          lable={"الحساسية"}
          data={selectedPatient.allergies}
          w={"100%"}
          h={"150px"}
        />
        <InfoWin
          lable={"الامراض المزمنة"}
          data={selectedPatient.chronic_diseases}
          w={"100%"}
          h={"150px"}
        />
        <InfoWin
          lable={"الادوية الحالية"}
          data={selectedPatient.current_medications}
          w={"100%"}
          h={"150px"}
        />
        <InfoWin
          lable={"الوصف"}
          data={selectedPatient.description}
          w={"100%"}
          h={"150px"}
        />
      </section>
    </div>
  );
}
