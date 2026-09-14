
import "./select.css"

export default function Select({label}){
    return(
        <div className="select-div">
            <label>{label}</label>
            <select ></select>
        </div>
    )
}