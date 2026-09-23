
import "./select.css"

export default function Select({label,w,name}){
    return(
        <div className="select-div" style={{width:w}}>
            <label>{label}</label>
            <select name={name}></select>
        </div>
    )
}