import AppointmentAdd from "../sections/appointmentAdd/appointmentAdd"
import AppointmentsTable from "../sections/appointmentsTable/appointmentsTable"
import "./appointmentsPage.css"

export default function AppointmentsPage() {
    return(
        <div className="appointmentsPage">
             {/* <AppointmentAdd/> */}
            <AppointmentsTable/>
           
        </div>
    )
}