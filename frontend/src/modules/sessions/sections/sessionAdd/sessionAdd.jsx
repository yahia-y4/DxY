import AddToothWin from "../../../../components/addToothWin/addToothWin";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import Textarea from "../../../../components/textarea/textarea";
import "./sessionAdd.css";
import { useSession } from "../../context/useSession";
import { handleArrayState } from "../../../../helperFunctions/handleArrayState";
import { chooseToothState } from "../../../../helperFunctions/chooseToothState";
import { useState } from "react";
export default function SessionAdd() {
  const { setCurrentSession } = useSession();
  const [formData, setFormData] = useState({
    patient_id: 1,
    treatment_plan_id: null,
    name:"",
    description: "description",
    diagnosis: "diagnosis",
    treatment: "treatment",
    prescribed_medication: "prescribed_medication",
    teeth_number: 4,
    teeth_vertical: "top",
    teeth_horizontal: "left",
  });

  //functions
  function back() {
    handleArrayState(setCurrentSession, 0, "sessionsTable");
  }



  function onToothClick(tooth){
    chooseToothState(setFormData,formData,tooth)
  }
  //
  return (
    <div className="sessionAdd">
      <section className="section-1">
        <form>
          <Input name={"name"} value={formData.name} label={"اسم الجلسة"} />
          <Select name={"patient_id"} label={"المريض"} />
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
          <Button lable={"اضافة"} />
          <Button lable={"محو"} />
          <Button onClick={back} lable={"الغاء"} />
        </div>
      </section>
      <section className="section-2">
        <Textarea label={"التشخيص"} h={"150px"} />
        <Textarea label={"المعالجة"} h={"150px"} />
        <Textarea label={"الدواء الموصوف"} h={"150px"} />
        <Textarea label={"ملاحظة"} h={"150px"} />
      </section>
    </div>
  );
}
