import "./sessionEdit.css";
import Input from "../../../../components/input/input";
import AddToothWin from "../../../../components/addToothWin/addToothWin";
import Button from "../../../../components/button/button";
import Textarea from "../../../../components/textarea/textarea";
import { useSession } from "../../context/useSession";
import { useState } from "react";
import { chooseToothState } from "../../../../helperFunctions/chooseToothState";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import { useEditSession } from "../../queries/useEditSession";

export default function SessionEdit() {
  const { selectedSession ,setSelectedSession, setCurrentSession } = useSession();
  const [formData, setFormData] = useState({
    id:selectedSession.id,
    treatment_plan_id: null,
    name: selectedSession.name,
    description: selectedSession.description,
    diagnosis: selectedSession.diagnosis,
    treatment: selectedSession.treatment,
    prescribed_medication: selectedSession.prescribed_medication,
    teeth_number: selectedSession.teeth_number,
    teeth_vertical: selectedSession.teeth_vertical,
    teeth_horizontal: selectedSession.teeth_horizontal,
  });


const editSession = useEditSession()


  //functions-------
function handleEditSession(){
  editSession.mutate(formData,{
    onSuccess:(session)=>{
      setSelectedSession(session)
      back();
    }
  })
}

  function onToothClick(tooth) {
    chooseToothState(setFormData, formData, tooth);
  }
  function back() {
    handleArrayState(setCurrentSession, 0, "sessionInfo");
  }
  function emptyFormData(){
    setFormData({
    id:selectedSession.id,
    treatment_plan_id: null,
    name: "",
    description: "",
    diagnosis: "",
    treatment: "",
    prescribed_medication: "",
    teeth_number: 0,
    teeth_vertical: "",
    teeth_horizontal: "",
    })
  }
  //---------

  return (
    <div className="SessionEdit-div">
      <section className="section-1">
        <div className="form">
          <Input
            onChange={(e) => handleInputs(setFormData, e)}
            name={"name"}
            value={formData.name}
            label={"اسم الجلسة"}
          />
        </div>
        <AddToothWin
          onToothClick={onToothClick}
          number={formData.teeth_number}
          horizontal={formData.teeth_horizontal}
          vertical={formData.teeth_vertical}
          w={"400px"}
          h={"500px"}
          title={"السن"}
        />
        <div className="add-buts">
          <Button onClick={handleEditSession} lable={"تعديل"} />
          <Button onClick={emptyFormData} lable={"محو"} />
          <Button onClick={back} lable={"الغاء"} />
        </div>
      </section>
      <section className="section-2">
        <Textarea
          onChange={(e) => handleInputs(setFormData, e)}
          value={formData.diagnosis}
          name={"diagnosis"}
          label={"التشخيص"}
          h={"150px"}
        />
        <Textarea
          onChange={(e) => handleInputs(setFormData, e)}
          value={formData.treatment}
          name={"treatment"}
          label={"المعالجة"}
          h={"150px"}
        />
        <Textarea
          onChange={(e) => handleInputs(setFormData, e)}
          value={formData.prescribed_medication}
          name={"prescribed_medication"}
          label={"الدواء الموصوف"}
          h={"150px"}
        />
        <Textarea
          onChange={(e) => handleInputs(setFormData, e)}
          value={formData.description}
          name={"description"}
          label={"الوصف"}
          h={"150px"}
        />
      </section>
    </div>
  );
}
