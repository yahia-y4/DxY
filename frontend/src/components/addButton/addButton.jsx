
import "./addButton.css"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function AddButton({onClick}){
    return(
        <div className="AddButton" onClick={onClick}><AddCircleOutlineOutlinedIcon style={{fontSize:40}}/></div>
    )
}