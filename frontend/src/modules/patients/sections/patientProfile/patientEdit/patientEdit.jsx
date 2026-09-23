import "./patientEdit.css";

import Button from "../../../../../components/button/button";
import Input from "../../../../../components/input/input";
import Textarea from "../../../../../components/textarea/textarea";
import { handleInputs } from "../../../../../helperFunctions/handleInputs";
import { handleArrayState } from "../../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../../context/patientsContext";
import { useContext, useState } from "react";
import { useEditPatient } from "../../../queries/useEditPatient";
export default function PatientEdit() {
  const { setSelectedPatientSection, selectedPatient,setSelectedPatient} = useContext(PatientsContext);

  const [formData, setFormData] = useState({
    id:selectedPatient.id,
    name: selectedPatient.name,
    father_name: selectedPatient.father_name,
    nick_name: selectedPatient.nick_name,
    identity_card_number: selectedPatient.identity_card_number,
    dirth_date: selectedPatient.dirth_date,
    description: selectedPatient.description,
    allergies: selectedPatient.allergies,
    chronic_diseases: selectedPatient.chronic_diseases,
    current_medications: selectedPatient.current_medications,
    status: selectedPatient.status,
    outstanding_balance: selectedPatient.outstanding_balance,
  });

  const editPatient = useEditPatient();
//   useQueryUI(editPatient)  // اصلاح فيما بعد
  //functions
  function onSubmit() {
    editPatient.mutate(formData,{
        onSuccess:(updatedPatient)=>{
            console.log(updatedPatient);
             handleArrayState(setSelectedPatientSection, 1, null)
             setSelectedPatient(updatedPatient)
        }
    })
  }
  function emptyDataFrom(){
    setFormData({
    id:selectedPatient.id,    
    name: "",
    father_name: "",
    nick_name: "",
    identity_card_number: "",
    dirth_date: "",
    description: "",
    allergies: "",
    chronic_diseases: "",
    current_medications: "",
    status: "",
    outstanding_balance: 0,
    })
  }
  //-----------
  return (
    <div className="edit-Patient">
      <div className="patient-inputs-form">
        <section className="section-1">
          <Input
            labelC={"#fff"}
            name={"name"}
            label={"الاسم"}
            value={formData.name}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Input
            labelC={"#fff"}
            name={"father_name"}
            label={"اسم الاب"}
            value={formData.father_name}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Input
            labelC={"#fff"}
            name={"nick_name"}
            label={"الكنية"}
            value={formData.nick_name}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Input
            labelC={"#fff"}
            name={"identity_card_number"}
            label={"رقم الهوية"}
            value={formData.identity_card_number}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Input
            labelC={"#fff"}
            name={"dirth_date"}
            label={"تاريخ الميلاد"}
            value={formData.dirth_date}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Input
            labelC={"#fff"}
            name={"status"}
            label={"الحالة"}
            value={formData.status}
            onChange={(e) => handleInputs(setFormData, e)}
          />

          <div className="buts">
            <Button labelC={"#fff"} onClick={onSubmit} lable={"تعديل"} />
            <Button labelC={"#fff"} lable={"محو"}  onClick={emptyDataFrom}/>
            <Button
              labelC={"#fff"}
              onClick={() =>
                handleArrayState(setSelectedPatientSection, 1, null)
              }
              lable={"الغاء"}
            />
          </div>
        </section>
        <section className="section-2">
          <Textarea
            labelC={"#fff"}
            name={"allergies"}
            label={"الحساسية"}
            h={"150px"}
            value={formData.allergies}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Textarea
            labelC={"#fff"}
            name={"chronic_diseases"}
            label={"الامراض المزمنة"}
            h={"150px"}
            value={formData.chronic_diseases}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Textarea
            labelC={"#fff"}
            name={"current_medications"}
            label={"الادوية الحالة"}
            h={"150px"}
            value={formData.current_medications}
            onChange={(e) => handleInputs(setFormData, e)}
          />
          <Textarea
            labelC={"#fff"}
            name={"description"}
            label={"الوصف"}
            h={"150px"}
            value={formData.description}
            onChange={(e) => handleInputs(setFormData, e)}
          />
        </section>
      </div>
    </div>
  );
}
