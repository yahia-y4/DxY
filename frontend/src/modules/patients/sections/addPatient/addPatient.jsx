
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import Textarea from "../../../../components/textarea/textarea";
import "./addPatient.css";  
import {handleArrayState} from "../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../context/patientsContext";
import { useContext } from "react";
export default function AddPatient() {
    const {
        setSelectedPatientSection,
      } = useContext(PatientsContext);
    return (
        <div className="add-Patient">
            <div className="patient-inputs-form">
                <section className="section-1">
                 <Input label={"الاسم"}/>
                 <Input label={"اسم الاب"}/>
                 <Input label={"الكنية"}/>
                 <Input label={"رقم الهوية"}/>
                 <Input label={"تاريخ الميلاد"}/>
                 <Input label={"الحالة"}/>

                 <div className="buts">
                    <Button lable={"اضافة"}/>
                    <Button lable={"محو"}/>
                    <Button onClick={()=>{handleArrayState(setSelectedPatientSection,0,"patientsTable")}} lable={"الغاء"}/>
                 </div>

                </section>
                <section className="section-2">
                <Textarea label={"الحساسية"} h={"150px"}/>
                <Textarea label={"الامراض المزمنة"} h={"150px"}/>
                <Textarea label={"الادوية الحالة"} h={"150px"}/>
                <Textarea label={"الوصف"} h={"150px"}/>
                </section>
            </div>
        </div>
    )
}