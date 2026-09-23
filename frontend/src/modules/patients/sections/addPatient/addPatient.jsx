
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import Textarea from "../../../../components/textarea/textarea";
import "./addPatient.css";  
import {handleArrayState} from "../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../context/patientsContext";
import { useContext ,useState} from "react";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
export default function AddPatient() {
    const {
        setSelectedPatientSection,
      } = useContext(PatientsContext);

const [formData,setFormData]=useState({
    name:"",
    father_name:"",
    nick_name:"",
    identity_card_number:"",
    dirth_date:"",
    description:"",
    allergies:"",
    chronic_diseases:"",
    current_medications:"",
    status:"",
    outstanding_balance:0
})

//functions

console.log(formData)
//---------
    return (
        <div className="add-Patient">
            <div className="patient-inputs-form">
                <section className="section-1">
                 <Input name={"name"} label={"الاسم"} value={formData.name} onChange={(e)=>handleInputs(setFormData,e)}/>
                 <Input name={"father_name"} label={"اسم الاب"} value={formData.father_name} onChange={(e)=>handleInputs(setFormData,e)}/>
                 <Input name={"nick_name"} label={"الكنية"}  value={formData.nick_name} onChange={(e)=>handleInputs(setFormData,e)}/>
                 <Input  name={"identity_card_number"} label={"رقم الهوية"} value={formData.identity_card_number} onChange={(e)=>handleInputs(setFormData,e)}/>
                 <Input name={"dirth_date"} label={"تاريخ الميلاد"} value={formData.dirth_date} onChange={(e)=>handleInputs(setFormData,e)}/>
                 <Input name={"status"} label={"الحالة"} value={formData.status} onChange={(e)=>handleInputs(setFormData,e)}/>

                 <div className="buts">
                    <Button lable={"اضافة"}/>
                    <Button lable={"محو"}/>
                    <Button onClick={()=>{handleArrayState(setSelectedPatientSection,0,"patientsTable")}} lable={"الغاء"}/>
                 </div>

                </section>
                <section className="section-2">
                <Textarea name={"allergies"} label={"الحساسية"} h={"150px"} value={formData.allergies} onChange={(e)=>handleInputs(setFormData,e)}/>
                <Textarea name={"chronic_diseases"} label={"الامراض المزمنة"} h={"150px"} value={formData.chronic_diseases} onChange={(e)=>handleInputs(setFormData,e)}/>
                <Textarea  name={"current_medications"} label={"الادوية الحالة"} h={"150px"} value={formData.current_medications} onChange={(e)=>handleInputs(setFormData,e)}/>
                <Textarea name={"description"} label={"الوصف"} h={"150px"} value={formData.description} onChange={(e)=>handleInputs(setFormData,e)}/>
                </section>
            </div>
        </div>
    )
}