
import SideBarBut from "../sideBarBut/sideBarBut"
import "./sideBar.css"


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonalInjuryOutlinedIcon from '@mui/icons-material/PersonalInjuryOutlined';
import AirlineSeatFlatAngledOutlinedIcon from '@mui/icons-material/AirlineSeatFlatAngledOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export default function SideBar() {
  return (
    <div className="sideBar">
      <SideBarBut icon={<HomeOutlinedIcon/>} text="الرئيسية" />
      <SideBarBut icon={<PersonalInjuryOutlinedIcon/>} text="المرضى" />
      <SideBarBut icon={<AirlineSeatFlatAngledOutlinedIcon/>} text="الجلسات" />
      <SideBarBut icon={<LibraryBooksOutlinedIcon/>} text="الخطط العلاجية" />
      <SideBarBut icon=<AssignmentOutlinedIcon/> text="المواعيد" />
      <SideBarBut icon=<AttachMoneyOutlinedIcon/> text="المالية" />
      <SideBarBut icon=<PollOutlinedIcon/> text="الاحصائيات" />
      <SideBarBut icon=<PersonOutlineOutlinedIcon/> text="الحساب" />
    </div>
  )
}