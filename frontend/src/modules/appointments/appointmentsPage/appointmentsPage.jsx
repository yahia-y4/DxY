import AppointmentAdd from "../sections/appointmentAdd/appointmentAdd";
import AppointmentInfo from "../sections/appointmentInfo/appointmentInfo";
import AppointmentsTable from "../sections/appointmentsTable/appointmentsTable";
import "./appointmentsPage.css";
import { useAppo } from "../context/useAppo";
export default function AppointmentsPage() {
  const { appoSection } = useAppo();
  return (
    <div className="appointmentsPage">
      {appoSection == "appoAdd" && <AppointmentAdd />}
      {appoSection == "appoInfo" && <AppointmentInfo />}
      <AppointmentsTable />
    </div>
  );
}
