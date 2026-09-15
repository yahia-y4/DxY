
import "./showToothWin.css"

export default function ShowToothWin({number,vertical,horizontal}){

    return(
        <div className="showToothWin-div">
            <div className="top-right">{(vertical == "top" && horizontal =="right") ? number : ""}</div>
            <div className="top-left">{(vertical == "top" && horizontal =="left") ? number : ""}</div>
            <div className="bottom-right">{(vertical == "bottom" && horizontal =="right") ? number : ""}</div>
            <div className="bottom-left">{(vertical == "bottom" && horizontal =="left") ? number : ""}</div>
        </div>
    )
}