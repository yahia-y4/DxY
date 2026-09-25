import Input from "../../../../components/input/input";
import "./treatmentPlanAdd.css";
import Select from "../../../../components/select/select";
import Textarea from "../../../../components/textarea/textarea";
import Button from "../../../../components/button/button";
import { usePatients } from "../../../patients/queries/usePatients";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { useAddTreatmentPlan } from "../../queries/useAddTreatmentPlan";
import { useState } from "react";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
export default function TreatmentPlanAdd() {
  const [formData, setFormData] = useState({
    name: "",
    patient_id: "",
    description: "",
    status: "processing",
  });
  const { data, isLoading, isError, error, hasToken } = usePatients();
  useQueryUI({ isLoading, isError, error, hasToken });
  const addTreatmentPlan = useAddTreatmentPlan();
  useQueryUI(addTreatmentPlan);

  //functions
  function handleAddTreatmentPlan() {
    addTreatmentPlan.mutate(formData, {
      onSuccess: () => {
        console.log("success");
        emptyFormData();
      },
    });
  }

  function emptyFormData() {
    setFormData({
      name: "",
      patient_id: 0,
      description: "",
      status: "processing",
    });
  }
  //----

  return (
    <div className="treatmentPlanAdd">
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"name"}
        value={formData.name}
        label={"اسم الخطة"}
        w={"90%"}
      />
      <Select
        onChange={(e) => handleInputs(setFormData, e)}
        name={"patient_id"}
        value={formData.patient_id}
        patients={data}
        label={"المريض"}
        w={"93%"}
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
        <Button onClick={handleAddTreatmentPlan} lable={"اضافة"} />
        <Button onClick={emptyFormData} lable={"محو"} />
      </div>
    </div>
  );
}
