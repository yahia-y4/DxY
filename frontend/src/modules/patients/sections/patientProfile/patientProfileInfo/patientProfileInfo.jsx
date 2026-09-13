import "./patientProfileInfo.css";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AirlineSeatFlatAngledOutlinedIcon from "@mui/icons-material/AirlineSeatFlatAngledOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import InfoWin from "../../../../../infoWin/infoWin";

export default function PatientProfileInfo() {
  return (
    <div className="Patient-Profile-Info">
      <section className="section-1">
        <div className="Profile-Control-buts">
          <AppRegistrationOutlinedIcon style={{ fontSize: "27" }} />
          <DeleteOutlineOutlinedIcon style={{ fontSize: "27" }} />
          <AirlineSeatFlatAngledOutlinedIcon style={{ fontSize: "27" }} />
          <LibraryBooksOutlinedIcon style={{ fontSize: "27" }} />
          <AttachMoneyOutlinedIcon style={{ fontSize: "27" }} />
          <HighlightOffOutlinedIcon style={{ fontSize: "27" }} />
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
        <InfoWin lable={"الاسم"} data={"يحيى"} w={"100%"} h={"150px"} />
        <InfoWin lable={"الاسم"} data={"يحيى"} w={"100%"} h={"150px"} />
        <InfoWin lable={"الاسم"} data={"يحيى"} w={"100%"} h={"150px"} />
        <InfoWin lable={"الاسم"} data={"يحيى"} w={"100%"} h={"150px"} />
      </section>

      
    </div>
  );
}
