
import "./financeAdd.css"
import ListButton from "../../../../components/listButton/listButton"
import Input from "../../../../components/input/input"
import Select from "../../../../components/select/select"
import Button from "../../../../components/button/button"
import {usePatients} from "../../../patients/queries/usePatients"
export default function FinanceAdd(){
   const patients = usePatients();
    return(
        <div className="financeAdd">
            <div className="financeAdd-Control">
                <ListButton label={"اضافة دين"}/>
                <ListButton label={"استلام دفعة"}/>
            </div>
            <Select patients={patients?.data} label={"المريض"}/>
            <Input type="number" label={"المبلغ"}/>
            <Input label={"ملاحظة"}/>

             <div className="financeAdd-buts">
                <Button lable={"اضافة"}/>
                <Button lable={"الغاء"}/>
             </div>
        </div>
    )
}