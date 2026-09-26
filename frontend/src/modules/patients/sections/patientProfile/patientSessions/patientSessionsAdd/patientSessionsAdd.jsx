import "./patientSessionsAdd.css";
import AddToothWin from "../../../../../../components/addToothWin/addToothWin";
import Button from "../../../../../../components/button/button";
import Input from "../../../../../../components/input/input";
import Textarea from "../../../../../../components/textarea/textarea";
import { useContext } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { handleInputs } from "../../../../../../helperFunctions/handleInputs";
import { useAddSession } from "../../../../../sessions/queries/useAddSession";
import { chooseToothState } from "../../../../../../helperFunctions/chooseToothState";
import { useError } from "../../../../../../context/errorContext/useError";
import { useState } from "react";
export default function PatientSessionsAdd() {
 const {selectedPatient} = useContext(PatientsContext)
const [formData, setFormData] = useState({
    patient_id: selectedPatient.id,
    treatment_plan_id: null,
    name:"",
    description: "",
    diagnosis: "",
    treatment: "",
    prescribed_medication: "",
    teeth_number: 0,
    teeth_vertical: "",
    teeth_horizontal: "",
  });
  const addSession = useAddSession();
const {showError} = useError();

  //functions
  function handleAddSession(){
    addSession.mutate(formData,{
      onSuccess:()=>{
        console.log("Session");
        emptyFormData()

       
      },
      onError:()=>{
        showError("خطا في اضافة الجلسة")
      }
    })
  }

  function onToothClick(tooth){
    chooseToothState(setFormData,formData,tooth)
  }

  function emptyFormData(){
    setFormData({
    patient_id:selectedPatient.id,
    treatment_plan_id: null,
    name:"",
    description: "",
    diagnosis: "",
    treatment: "",
    prescribed_medication: "",
    teeth_number: 0,
    teeth_vertical: "",
    teeth_horizontal: "",
    })
  }


  //


  return (
    <div className="patient-sessions-add">
       <section className="section-1">
              <form>
                <Input onChange={(e)=>handleInputs(setFormData,e)} name={"name"} value={formData.name} label={"اسم الجلسة"} />
               
              </form>
              <AddToothWin onToothClick={onToothClick}
                number={formData.teeth_number}
                horizontal={formData.teeth_horizontal}
                vertical={formData.teeth_vertical}
                w={"80%"}
                h={"500px"}
                title={"السن"}
              />
              <div className="add-buts">
                <Button onClick={handleAddSession} lable={"اضافة"} />
                <Button onClick={emptyFormData} lable={"محو"} />
             
              </div>
            </section>
            <section className="section-2">
              <Textarea onChange={(e)=>handleInputs(setFormData,e)} value={formData.diagnosis} name={"diagnosis"} label={"التشخيص"} h={"150px"} />
              <Textarea onChange={(e)=>handleInputs(setFormData,e)} value={formData.treatment} name={"treatment"} label={"المعالجة"} h={"150px"} />
              <Textarea onChange={(e)=>handleInputs(setFormData,e)} value={formData.prescribed_medication} name={"prescribed_medication"} label={"الدواء الموصوف"} h={"150px"} />
              <Textarea onChange={(e)=>handleInputs(setFormData,e)} value={formData.description} name={"description"} label={"الوصف"} h={"150px"} />
            </section>
    </div>
  );
}
