import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import "./appointmentAdd.css";
import { useAddAppo } from "../../queries/useAddAppo";
import { usePatients } from "../../../patients/queries/usePatients";
import { useQueryUI } from "../../../../hooks/useQueryUI";
import { useState } from "react";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
export default function AppointmentAdd() {
  const [formData, setFormData] = useState({
    patient_id: "",
    appointment_date: "",
    hour: "",
    vist_reason: "",
    status: "pending",
    note: "",
  });
  const patients = usePatients();
  const addAppo = useAddAppo();
  useQueryUI(addAppo);

  //functions
  function handleAddAppo() {
    addAppo.mutate(formData, {
      onSuccess: () => {
        emptyData()
      },
    });
  }

  function emptyData() {
    setFormData({
      patient_id: "",
      appointment_date: "",
      hour: "",
      vist_reason: "",
      status: "pending",
      note: "",
    });
  }
  //
  return (
    <div className="appointmentAdd">
      <Select
        onChange={(e) => handleInputs(setFormData, e)}
        name={"patient_id"}
        value={formData.patient_id}
        patients={patients.data}
        w={"92%"}
        label={"المريض"}
      />
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"vist_reason"}
        value={formData.vist_reason}
        w={"90%"}
        label={"سبب الموعد"}
      />
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"appointment_date"}
        value={formData.appointment_date}
        w={"90%"}
        type="date"
        label={"تاريخ الحضور"}
      />
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"hour"}
        value={formData.hour}
        w={"90%"}
        label={"الساعة"}
      />
      <div className="appointmentAdd-buts">
        <Button onClick={handleAddAppo} lable={"اضافة"} />
        <Button onClick={emptyData} lable={"محو"} />
      </div>
    </div>
  );
}
