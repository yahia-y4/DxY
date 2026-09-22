
import "./sideBarBut.css";

 export default function SideBarBut({ icon, text, selected=false }){
    return (
        <div className={selected? "selected-sideBarBut" : "sideBarBut"}>
            <div className="sideBarButIcon">{icon}</div>
            <div className="sideBarButText">{text}</div>
        </div>
    );
}