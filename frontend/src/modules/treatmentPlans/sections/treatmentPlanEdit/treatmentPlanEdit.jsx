import "./treatmentPlanEdit.css";
import Input from "../../../../components/input/input";
import ListButton from "../../../../components/listButton/listButton";
import Textarea from "../../../../components/textarea/textarea";
import Button from "../../../../components/button/button";
import { useState } from "react";
import { useTreatmentPlan } from "../../context/useTreatmentPlan";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
export default function TreatmentPlanEdit() {
  const {
    setSelectedTreatmentPlan,
    selectedTreatmentPlan,
    setCurrentTreatmentPlan,
  } = useTreatmentPlan();

  const [formData, setFormData] = useState({
    name: selectedTreatmentPlan.name,
    description: selectedTreatmentPlan.description,
    status: selectedTreatmentPlan.status,
  });

  //functions
  function handleStatus(setFun, stateData, status) {
    setFun({ ...stateData, status: status });
  }
  function back() {
    setCurrentTreatmentPlan("treatmentPlanInfo");
  }
  function emptyFormData() {
    setFormData({
      name: "",
      description: "",
      status: "processing",
    });
  }
  //---
  return (
    <div className="TreatmentPlanEdit-div">
      <div className="TreatmentPlanEdit-form">
        <Input
          onChange={(e) => handleInputs(setFormData, e)}
          name={"name"}
          value={formData.name}
          labelC={"#fff"}
          label={"الخطة"}
        />
        <div className="status-buts">
          <ListButton
            onClick={() => handleStatus(setFormData, formData, "processing")}
            label={"قيد المعالجة"}
            selected={formData.status == "processing"}
          />
          <ListButton
            onClick={() => handleStatus(setFormData, formData, "finished")}
            label={"تمت المعالجة"}
            selected={formData.status == "finished"}
          />
          <ListButton
            onClick={() => handleStatus(setFormData, formData, "cancelled")}
            label={"ملغية"}
            selected={formData.status == "cancelled"}
          />
        </div>
        <Textarea
          onChange={(e) => handleInputs(setFormData, e)}
          name={"description"}
          value={formData.description}
          h={"100%"}
        />
        <div className="edit-buts">
          <Button lable={"تعديل"} />
          <Button onClick={emptyFormData} lable={"محو"} />
          <Button onClick={back} lable={"الغاء"} />
        </div>
      </div>
    </div>
  );
}
