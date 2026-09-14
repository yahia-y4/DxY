
import SessionAdd from "../sections/sessionAdd/sessionAdd"
import "./sessionsPage.css"
//import SectionsTable from "../sections/sessionsTable/sessionsTable"


export default function SessionsPage(){
    return(
        <div className="sessions-Page">
        {/* <SectionsTable/> */}
        <SessionAdd/>
        </div>
    )
}