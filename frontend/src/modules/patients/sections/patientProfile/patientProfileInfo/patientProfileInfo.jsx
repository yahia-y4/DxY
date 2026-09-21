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
import IconButton from "../../../../../components/iconButton/iconButton";
export default function PatientProfileInfo() {
  const { setSelectedPatientSection } = useContext(PatientsContext);

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
            icon={<LibraryBooksOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            icon={<AttachMoneyOutlinedIcon style={{ fontSize: "27" }} />}
          />
          <IconButton
            onClick={back}
            icon={<ArrowBackIcon style={{ fontSize: "27" }} />}
          />
        </div>
        <div className="section-content">
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
          <InfoWin title={"الاسم"} data={"يحيى"} />
        </div>
      </section>
      <section className="section-2">
        <InfoWin lable={"الاسم"} data={""} w={"100%"} h={"150px"} />
        <InfoWin lable={"الاسم"} data={""} w={"100%"} h={"150px"} />
        <InfoWin lable={"الاسم"} data={""} w={"100%"} h={"150px"} />
        <InfoWin lable={"الاسم"} data={""} w={"100%"} h={"150px"} />
      </section>
    </div>
  );
}
