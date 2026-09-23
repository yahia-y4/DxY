import { useContext } from "react";
import { WarningContext } from "./warningContext";
export const useWarning =()=>{
    return useContext(WarningContext)
}