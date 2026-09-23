
import AddToothWin from "../../../../components/addToothWin/addToothWin"
import Button from "../../../../components/button/button"
import Input from "../../../../components/input/input"
import Select from "../../../../components/select/select"
import Textarea from "../../../../components/textarea/textarea"
import "./sessionAdd.css"
import { useSession } from "../../context/useSession"
import { handleArrayState } from "../../../../helperFunctions/handleArrayState"
export default function SessionAdd() {
    const{setCurrentSession} = useSession()

    //functions
    function back(){
        handleArrayState(setCurrentSession,0,"sessionsTable")
    }
    //
    return(
        <div className="sessionAdd">
            <section className="section-1">
                <form >
                    <Input label={"اسم الجلسة"} />
                    <Select label={"المريض"}/>
                </form>
                <AddToothWin number={1} horizontal={"left"} vertical={"top"} w={"400px"} h={"500px"} title={"السن"}/>
                <div className="add-buts">
                    <Button lable={"اضافة"}/>
                    <Button lable={"محو"}/>
                    <Button onClick={back} lable={"الغاء"}/>
                </div>
                
            </section>
            <section className="section-2">
             <Textarea label={"التشخيص"} h={"150px"}/>
             <Textarea label={"المعالجة"} h={"150px"}/>
             <Textarea label={"الدواء الموصوف"} h={"150px"}/>
             <Textarea label={"ملاحظة"} h={"150px"}/>
          
            </section>
        </div>
    )
}