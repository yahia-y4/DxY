import "./patientSessionsAdd.css";
import AddToothWin from "../../../../../../components/addToothWin/addToothWin";
import Button from "../../../../../../components/button/button";
import Input from "../../../../../../components/input/input";
import Textarea from "../../../../../../components/textarea/textarea";
export default function PatientSessionsAdd() {
  return (
    <div className="patient-sessions-add">
      <section className="section-1">
        <form>
          <Input label={"اسم الجلسة"} />
    
        </form>
        <AddToothWin w={"400px"} h={"500px"} title={"السن"} />
        <div className="add-buts">
          <Button lable={"اضافة"} />
          <Button lable={"الغاء"} />
        </div>
      </section>
      <section className="section-2">
        <Textarea label={"التشخيص"} h={"150px"} w={"70%"} />
        <Textarea label={"المعالجة"} h={"150px"} w={"70%"} />
        <Textarea label={"الدواء الموصوف"} h={"150px"} w={"70%"} />
        <Textarea label={"ملاحظة"} h={"150px"} w={"70%"} />
      </section>
    </div>
  );
}
