import Input from "../input/input";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useState } from "react";

export default function Search({ onSearch, onCancel, w }) {
  const [inputValue, setInputValue] = useState("");
  function handleInput(e) {
    const value = e.target.value;
    setInputValue(value);
  }
  function empty(){
    setInputValue("")
   
  }
  return (
    <div className="search-div" style={{ width: w }}>
      <Input value={inputValue} onChange={handleInput} />
      <div className="search-butn" onClick={() => onSearch(inputValue)}>
        <SearchIcon style={{ fontSize: "30px" }} />
      </div>
      <div className="search-butn" onClick={()=>{
        onCancel()
        empty()
      }}>
        <CancelOutlinedIcon style={{ fontSize: "27px" }} />
      </div>
    </div>
  );
}
