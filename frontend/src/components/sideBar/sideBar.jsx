import SideBarBut from "../sideBarBut/sideBarBut";
import "./sideBar.css";
import { Link ,useLocation} from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import AirlineSeatFlatAngledOutlinedIcon from "@mui/icons-material/AirlineSeatFlatAngledOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
export default function SideBar() {
  const page = useLocation().pathname;
  return (
    <div className="sideBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <SideBarBut selected={page =="/"?true:false} icon={<HomeOutlinedIcon />} text="الرئيسية" />
      </Link>
      <Link to="/patients" style={{textDecoration:"none"}}>
        <SideBarBut selected={page =="/patients"?true:false}  icon={<PersonalInjuryOutlinedIcon />} text="المرضى" />
      </Link>
      <Link to="/sessions" style={{textDecoration:"none"}}>
        <SideBarBut
        selected={page =="/sessions"?true:false}
          icon={<AirlineSeatFlatAngledOutlinedIcon />}
          text="الجلسات"
        />
      </Link>
      <Link to="/treatmentPlans" style={{textDecoration:"none"}}>
        <SideBarBut selected={page =="/treatmentPlans"?true:false} icon={<LibraryBooksOutlinedIcon />} text="الخطط العلاجية" />
      </Link>
      <Link to="/appointments" style={{textDecoration:"none"}}>
        <SideBarBut selected={page =="/appointments"?true:false} icon={<AssignmentOutlinedIcon />} text="المواعيد" />
      </Link>
      <Link to="/finance" style={{textDecoration:"none"}}>
        <SideBarBut selected={page =="/finance"?true:false} icon={<AttachMoneyOutlinedIcon />} text="المالية" />
      </Link>
      <Link to="/statistics" style={{textDecoration:"none"}}>
        <SideBarBut selected={page =="/statistics"?true:false} icon={<PollOutlinedIcon />} text="الاحصائيات" />
      </Link>
      <Link to="/account" style={{textDecoration:"none"}}>
        <SideBarBut selected={page =="/account"?true:false} icon={<PersonOutlineOutlinedIcon />} text="الحساب" />
      </Link>
    </div>
  );
}
