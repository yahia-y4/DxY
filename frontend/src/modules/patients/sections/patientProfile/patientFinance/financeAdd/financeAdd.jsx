
import "./financeAdd.css"
import ListButton from "../../../../../../components/listButton/listButton";
import Input from "../../../../../../components/input/input";
import Button from "../../../../../../components/button/button";
export default function FinanceAdd(){
    return(
        <div className="financeAdd">
            <div className="financeAdd-Control">
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