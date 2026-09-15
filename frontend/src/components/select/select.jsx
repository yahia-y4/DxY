
import "./select.css"

export default function Select({label,w}){
    return(
        <div className="select-div" style={{width:w}}>
            <label>{label}</label>
            <select ></select>
        </div>
    )
}