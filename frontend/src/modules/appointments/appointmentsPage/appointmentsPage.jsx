import AppointmentAdd from "../sections/appointmentAdd/appointmentAdd"
import AppointmentInfo from "../sections/appointmentInfo/appointmentInfo"
import AppointmentsTable from "../sections/appointmentsTable/appointmentsTable"
import "./appointmentsPage.css"

export default function AppointmentsPage() {
    return(
        <div className="appointmentsPage">
             {/* <AppointmentAdd/> */}
             <AppointmentInfo/>
            <AppointmentsTable/>
           
        </div>
    )
}