import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import "./appointmentAdd.css";

export default function AppointmentAdd() {
  return (
    <div className="appointmentAdd">
      <Select w={"92%"} label={"المريض"} />
      <Input w={"90%"} label={"سبب الموعد"} />
      <Input w={"90%"} type="date" label={"تاريخ الحضور"} />
      <Input w={"90%"} label={"الساعة"} />
      <div className="appointmentAdd-buts">
        <Button lable={"اضافة"} />
        <Button lable={"محو"} />
      </div>
    </div>
  );
}
