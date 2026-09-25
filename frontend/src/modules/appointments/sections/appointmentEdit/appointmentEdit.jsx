import "./appointmentEdit.css";
import { handleStatus } from "../../../../helperFunctions/handleStatus";
import Input from "../../../../components/input/input";
import ListButton from "../../../../components/listButton/listButton";
import Button from "../../../../components/button/button";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
import { useState } from "react";
import { useAppo } from "../../context/useAppo";
export default function AppointmentEdit() {
  const { selectedAppo, setSelectedAppo, setAppoSection } = useAppo();

  const [formData, setFormData] = useState({
    id: selectedAppo.id,
    appointment_date: selectedAppo.appointment_date,
    hour: selectedAppo.hour,
    vist_reason: selectedAppo.vist_reason,
    status: selectedAppo.status,
    note: "",
  });

  // functions
  function emptyFormData() {
    setFormData({
      id: selectedAppo.id,
      appointment_date: "",
      hour: "",
      vist_reason: "",
      status: "pending",
      note: "",
    });
  }
  function back() {
    setAppoSection("appoInfo");
  }
  //-----
  return (
    <div className="appointmentEdit-div">
      <div className="appointmentEdit-form">
        <Input
          onChange={(e) => handleInputs(setFormData, e)}
          name={"vist_reason"}
          value={formData.vist_reason}
          labelC={"#fff"}
          label={"سبب الموعد"}
        />
        <Input
          type="date"
          onChange={(e) => handleInputs(setFormData, e)}
          name={"appointment_date"}
          value={formData.appointment_date}
          labelC={"#fff"}
          label={"تاريخ الحجز"}
        />
        <Input
          onChange={(e) => handleInputs(setFormData, e)}
          name={"hour"}
          value={formData.hour}
          labelC={"#fff"}
          label={"الساعة"}
        />
        <div className="status-buts">
          <ListButton
            onClick={() => handleStatus(setFormData, formData, "pending")}
            label={"انتظار"}
            selected={formData.status == "pending"}
          />
          <ListButton
            onClick={() => handleStatus(setFormData, formData, "approved")}
            label={"تم"}
            selected={formData.status == "approved"}
          />
          <ListButton
            onClick={() => handleStatus(setFormData, formData, "rejected")}
            label={"ملغي"}
            selected={formData.status == "rejected"}
          />
        </div>

        <div className="edit-buts">
          <Button onClick={""} lable={"تعديل"} />
          <Button onClick={emptyFormData} lable={"محو"} />
          <Button onClick={back} lable={"الغاء"} />
        </div>
      </div>
    </div>
  );
}
