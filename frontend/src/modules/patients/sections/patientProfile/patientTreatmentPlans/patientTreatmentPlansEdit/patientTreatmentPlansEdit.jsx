import "./patientTreatmentPlansEdit.css";
import Input from "../../../../../../components/input/input";
import ListButton from "../../../../../../components/listButton/listButton";
import Textarea from "../../../../../../components/textarea/textarea";
import Button from "../../../../../../components/button/button";
import { useState } from "react";
import { useContext } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { handleInputs } from "../../../../../../helperFunctions/handleInputs";
import { useEditTreatmentPlan } from "../../../../../treatmentPlans/queries/useEditTreatmentPlan";
import { handleStatus } from "../../../../../../helperFunctions/handleStatus";
import { handleArrayState } from "../../../../../../helperFunctions/handleArrayState";
import { useError } from "../../../../../../context/errorContext/useError";
export default function PatientTreatmentPlansEdit() {
  const {
    setSelectedTreatmentPlan,
    selectedTreatmentPlan,
    setSelectedPatientSection,
  } = useContext(PatientsContext);
  const { showError } = useError();
  const editTreatmentPlan = useEditTreatmentPlan();

  const [formData, setFormData] = useState({
    id: selectedTreatmentPlan.id,
    name: selectedTreatmentPlan.name,
    description: selectedTreatmentPlan.description,
    status: selectedTreatmentPlan.status,
  });

  //functions

  function handleEditTreatmentPlan() {
    editTreatmentPlan.mutate(formData, {
      onSuccess: (treatmentPlan) => {
        setSelectedTreatmentPlan(treatmentPlan);
        back();
      },
      onError: () => {
        const text = "خطا في تعديل معلومات الخطة";
        showError(text);
      },
    });
  }

  function back() {
    handleArrayState(setSelectedPatientSection, 3, null);
  }
  function emptyFormData() {
    setFormData({
      id: selectedTreatmentPlan.id,
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
          <Button onClick={handleEditTreatmentPlan} lable={"تعديل"} />
          <Button onClick={emptyFormData} lable={"محو"} />
          <Button onClick={back} lable={"الغاء"} />
        </div>
      </div>
    </div>
  );
}
