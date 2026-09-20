
import "./patientEdit.css"

import Button from "../../../../../components/button/button"
import Input from "../../../../../components/input/input"
import Textarea from "../../../../../components/textarea/textarea"



import { handleArrayState } from "../../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../../context/patientsContext"
import { useContext } from "react"
export default function PatientEdit() {
    const {
        setSelectedPatientSection,
      } = useContext(PatientsContext);
    return (
        <div className="edit-Patient">
            <div className="patient-inputs-form">
                <section className="section-1">
                 <Input label={"الاسم"} labelC={"#fff"}/>
                 <Input label={"اسم الاب"} labelC={"#fff"}/>
                 <Input label={"الكنية"} labelC={"#fff"}/>
                 <Input label={"رقم الهوية"} labelC={"#fff"}/>
                 <Input label={"تاريخ الميلاد"} labelC={"#fff"}/>
                 <Input label={"الحالة"} labelC={"#fff"}/>

                 <div className="buts">
                    <Button lable={"تعديل"} labelC={"#fff"}/>
                    <Button lable={"محو"} labelC={"#fff"}/>
                    <Button onClick={()=>handleArrayState(setSelectedPatientSection,1,null)} lable={"الغاء"} labelC={"#fff"}/>
                 </div>

                </section>
                <section className="section-2">
                <Textarea label={"الحساسية"} h={"150px"} labelC={"#fff"}/>
                <Textarea label={"الامراض المزمنة"} h={"150px"} labelC={"#fff"}/>
                <Textarea label={"الادوية الحالة"} h={"150px"} labelC={"#fff"}/>
                <Textarea label={"الوصف"} h={"150px"} labelC={"#fff"}/>
                </section>
            </div>
        </div>
    )
}