
import "./listButton.css"

export default function ListButton({label,onClick,selected}){
    return(
        <div className={selected? "listButton-selected":"listButton"} onClick={onClick}>
            {label}
        </div>
    )

}