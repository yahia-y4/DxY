import { SessionsContext } from "./sessionsContext";
import { useState } from "react";

export function SessionsProvider({children}) {
    const [selectedSession,setSelectedSession] = useState({})
    const [currentSession,setCurrentSession] = useState(["sessionsTable"]) // [sessionsTable | sessionAdd | sessionInfo  ,  ... ]
    return(
        <SessionsContext.Provider value={{selectedSession,setSelectedSession,currentSession,setCurrentSession}}>
            {children}
        </SessionsContext.Provider>
    )
}