import "./welcome.css"

export default function Welcome(){
    const welcome = "مرحبا دكتور" 
    const name = "احمد";
    const whatDoingText = "اليك موجز بسيط عن اداء اليوم : "

    return (
        <div className="welcome-div">
            <div className="welcome-text">{welcome + " " + name}</div>
            <div className="what-doing"> {whatDoingText}</div>
        </div>
    )
}