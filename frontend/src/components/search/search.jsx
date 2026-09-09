
import Input from "../input/input";
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export default function Search({ onSearch , onCancel , w}) {
    return (
        <div className="search-div" style={{width: w}}>
            <Input/>
            <div className="search-butn" onClick={onSearch}><SearchIcon/></div>
            <div className="search-butn" onClick={onCancel}><CancelOutlinedIcon/></div>
        </div>
    )
   

}