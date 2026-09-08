
import "./sideBarBut.css";

 export default function SideBarBut({ icon, text }){
    return (
        <div className="sideBarBut">
            <div className="sideBarButIcon">{icon}</div>
            <div className="sideBarButText">{text}</div>
        </div>
    );
}