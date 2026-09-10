
import "./button.css"

export default function Button({lable,onClick}){
    return(
        <button className="Button" onClick={onClick}>{lable}</button>
    )
}