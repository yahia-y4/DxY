import "./patientTreatmentPlansAdd.css";
import Input from "../../../../../../components/input/input";
import Textarea from "../../../../../../components/textarea/textarea";
import Button from "../../../../../../components/button/button";
export default function PatientTreatmentPlansAdd() {
  return (
    <div className="patientTreatmentPlans-Add">
      <Input label={"اسم الخطة"} w={"90%"} />
      <Textarea label={"الوصف"} w={"90%"} h={"65%"} />
      <div className="treatmentPlanAdd-buts">
        <Button lable={"اضافة"} />
        <Button lable={"الغاء"} />
      </div>
    </div>
  );
}
