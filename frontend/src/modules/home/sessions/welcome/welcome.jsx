import "./welcome.css"
import { useAuth } from "../../../../context/authContext/useAuth";
export default function Welcome(){
    const {user} = useAuth();
    const welcome = "مرحبا دكتور" 
    const whatDoingText = "اليك موجز بسيط عن اداء اليوم : "

    return (
        <div className="welcome-div">
            <div className="welcome-text">{welcome + " " + user?.name}</div>
            <div className="what-doing"> {whatDoingText}</div>
        </div>
    )
}