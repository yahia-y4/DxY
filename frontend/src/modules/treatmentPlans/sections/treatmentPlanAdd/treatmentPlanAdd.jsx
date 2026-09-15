
import Input from "../../../../components/input/input"
import "./treatmentPlanAdd.css"
import Select from "../../../../components/select/select"
import Textarea from "../../../../components/textarea/textarea"
import Button from "../../../../components/button/button"
export default function TreatmentPlanAdd(){
    return(
        <div className="treatmentPlanAdd">
            <Input label={"اسم الخطة"} w={"90%"}/>
            <Select label={"المريض"} w={"90%"}/>
            <Textarea label={"الوصف"} w={"90%"} h={"65%"} />
            <div className="treatmentPlanAdd-buts">
                <Button lable={"اضافة"}/>
               
                <Button lable={"الغاء"}/>
            </div>
        </div>
    )
}