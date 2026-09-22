
import "./financeAdd.css"
import ListButton from "../../../../../../components/listButton/listButton";
import Input from "../../../../../../components/input/input";
import Button from "../../../../../../components/button/button";
import IconButton from "../../../../../../components/iconButton/iconButton";
import ForwardIcon from '@mui/icons-material/Forward';
import { handleArrayState } from "../../../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../../../context/patientsContext";
import { useContext } from "react";
export default function FinanceAdd(){
    const {setSelectedPatientSection} = useContext(PatientsContext);
    //functions

    function back(){
        handleArrayState(setSelectedPatientSection,1,null)
    }
    //
    return(
        <div className="financeAdd">
            <div className="financeAdd-Control">
                <IconButton onClick={back} icon={<ForwardIcon style={{fontSize:"35px"}} />}/>
                <ListButton label={"اضافة دين"}/>
                <ListButton label={"استلام دفعة"}/>
            </div>
            <Input type="number" label={"المبلغ"}/>
            <Input label={"ملاحظة"}/>

             <div className="financeAdd-buts">
                <Button lable={"اضافة"}/>
                <Button lable={"الغاء"}/>
             </div>
        </div>
    )
}