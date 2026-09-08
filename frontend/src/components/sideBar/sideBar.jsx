
import SideBarBut from "../sideBarBut/sideBarBut"
import "./sideBar.css"

export default function SideBar() {
  return (
    <div className="sideBar">
      <SideBarBut icon="🏠" text="الرئيسية" />
      <SideBarBut icon="🏠" text="المرضى" />
      <SideBarBut icon="🏠" text="الجلسات" />
      <SideBarBut icon="🏠" text="الخطط العلاجية" />
      <SideBarBut icon="🏠" text="المواعيد" />
      <SideBarBut icon="🏠" text="المالية" />
      <SideBarBut icon="🏠" text="الاحصائيات" />
      <SideBarBut icon="🏠" text="الحساب" />
    </div>
  )
}