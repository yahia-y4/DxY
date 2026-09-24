
import SessionAdd from "../sections/sessionAdd/sessionAdd"
import SessionInfo from "../sections/sessionInfo/sessionInfo"
import "./sessionsPage.css"
import SectionsTable from "../sections/sessionsTable/sessionsTable"
import { useSession } from "../context/useSession"
import SessionEdit from "../sections/sessionEdit/sessionEdit"

export default function SessionsPage(){
    const {currentSession} = useSession()
    return(
        <div className="sessions-Page">
        { currentSession[0] =="sessionsTable" && <SectionsTable/>}
        { currentSession[0] =="sessionAdd" && <SessionAdd/> }
        {  currentSession[0] =="sessionInfo" && <SessionInfo/> }
        {currentSession[0] == "sessionEdit" && <SessionEdit/>}
        </div>
    )
}