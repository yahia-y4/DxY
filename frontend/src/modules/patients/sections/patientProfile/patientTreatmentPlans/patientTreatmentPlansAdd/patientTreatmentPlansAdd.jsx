import "./patientTreatmentPlansAdd.css";
import Input from "../../../../../../components/input/input";
import Textarea from "../../../../../../components/textarea/textarea";
import Button from "../../../../../../components/button/button";
import { useContext } from "react";
import { useState } from "react";
import { PatientsContext } from "../../../../context/patientsContext";
import { handleInputs } from "../../../../../../helperFunctions/handleInputs";
import { useAddTreatmentPlan } from "../../../../../treatmentPlans/queries/useAddTreatmentPlan";
import { useError } from "../../../../../../context/errorContext/useError";
export default function PatientTreatmentPlansAdd() {
  const { selectedPatient } = useContext(PatientsContext);
  const [formData, setFormData] = useState({
    name: "",
    patient_id: selectedPatient.id,
    description: "",
    status: "processing",
  });
  const { showError } = useError();
  const addTreatmentPlan = useAddTreatmentPlan();
  //functions
  function handleAdd() {
    addTreatmentPlan.mutate(formData, {
      onSuccess: () => {
        emptyFormData();
      },
      onError: () => {
        const text = "خطا في اضافة الخطة";
        showError(text);
      },
    });
  }
  function emptyFormData() {
    setFormData({
      name: "",
      patient_id: selectedPatient.id,
      description: "",
      status: "processing",
    });
  }
  //
  return (
    <div className="patientTreatmentPlans-Add">
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"name"}
        value={formData.name}
        label={"اسم الخطة"}
        w={"90%"}
      />
      <Textarea
        onChange={(e) => handleInputs(setFormData, e)}
        name={"description"}
        value={formData.description}
        label={"الوصف"}
        w={"90%"}
        h={"65%"}
      />
      <div className="treatmentPlanAdd-buts">
        <Button onClick={handleAdd} lable={"اضافة"} />
        <Button onClick={emptyFormData} lable={"محو"} />
      </div>
    </div>
  );
}
