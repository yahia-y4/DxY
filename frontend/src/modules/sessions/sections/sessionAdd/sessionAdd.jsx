import AddToothWin from "../../../../components/addToothWin/addToothWin";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import Textarea from "../../../../components/textarea/textarea";
import "./sessionAdd.css";
import { useSession } from "../../context/useSession";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import { chooseToothState } from "../../../../helperFunctions/chooseToothState";
import {usePatients} from "../../../patients/queries/usePatients";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
import { useAddSession } from "../../queries/useAddSession";
import { useState } from "react";
export default function SessionAdd() {
  const { setCurrentSession } = useSession();
  const [formData, setFormData] = useState({
    patient_id: 0,
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

  const {data ,isLoading,isError,error,hasToken} = usePatients()
    useQueryUI({isLoading,isError,error,hasToken})
    const addSession = useAddSession()
    useQueryUI(addSession)
  //functions
  function handleAddSession(){
    addSession.mutate(formData,{
      onSuccess:()=>{
        console.log("Session");
        back();
      }
    })
  }
  function back() {
    handleArrayState(setCurrentSession, 0, "sessionsTable");
  }
  function onToothClick(tooth){
    chooseToothState(setFormData,formData,tooth)
  }

  function emptyFormData(){
    setFormData({
    patient_id: 0,
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
    <div className="sessionAdd">
      <section className="section-1">
        <form>
          <Input onChange={(e)=>handleInputs(setFormData,e)} name={"name"} value={formData.name} label={"اسم الجلسة"} />
          <Select onChange={(e)=>handleInputs(setFormData,e)} patients={data} name={"patient_id"} value={formData.patient_id} label={"المريض"} />
        </form>
        <AddToothWin onToothClick={onToothClick}
          number={formData.teeth_number}
          horizontal={formData.teeth_horizontal}
          vertical={formData.teeth_vertical}
          w={"400px"}
          h={"500px"}
          title={"السن"}
        />
        <div className="add-buts">
          <Button onClick={handleAddSession} lable={"اضافة"} />
          <Button onClick={emptyFormData} lable={"محو"} />
          <Button onClick={back} lable={"الغاء"} />
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
