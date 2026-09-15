
// import SessionAdd from "../sections/sessionAdd/sessionAdd"
import SessionInfo from "../sections/sessionInfo/sessionInfo"
import "./sessionsPage.css"
//import SectionsTable from "../sections/sessionsTable/sessionsTable"


export default function SessionsPage(){
    return(
        <div className="sessions-Page">
        {/* <SectionsTable/> */}
        {/* <SessionAdd/> */}
        <SessionInfo/>
        </div>
    )
}