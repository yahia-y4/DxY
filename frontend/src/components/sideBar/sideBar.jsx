import SideBarBut from "../sideBarBut/sideBarBut";
import "./sideBar.css";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import AirlineSeatFlatAngledOutlinedIcon from "@mui/icons-material/AirlineSeatFlatAngledOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
export default function SideBar() {
  return (
    <div className="sideBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <SideBarBut icon={<HomeOutlinedIcon />} text="الرئيسية" />
      </Link>
      <Link to="/patients" style={{textDecoration:"none"}}>
        <SideBarBut icon={<PersonalInjuryOutlinedIcon />} text="المرضى" />
      </Link>
      <Link to="/sessions" style={{textDecoration:"none"}}>
        <SideBarBut
          icon={<AirlineSeatFlatAngledOutlinedIcon />}
          text="الجلسات"
        />
      </Link>
      <Link to="/treatmentPlans" style={{textDecoration:"none"}}>
        <SideBarBut icon={<LibraryBooksOutlinedIcon />} text="الخطط العلاجية" />
      </Link>
      <Link style={{textDecoration:"none"}}>
        <SideBarBut icon={<AssignmentOutlinedIcon />} text="المواعيد" />
      </Link>
      <Link style={{textDecoration:"none"}}>
        <SideBarBut icon={<AttachMoneyOutlinedIcon />} text="المالية" />
      </Link>
      <Link style={{textDecoration:"none"}}>
        <SideBarBut icon={<PollOutlinedIcon />} text="الاحصائيات" />
      </Link>
      <Link style={{textDecoration:"none"}}>
        <SideBarBut icon={<PersonOutlineOutlinedIcon />} text="الحساب" />
      </Link>
    </div>
  );
}
