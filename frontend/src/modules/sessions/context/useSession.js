import { useContext } from "react";
import { SessionsContext } from "./sessionsContext";

export function useSession() {
  return useContext(SessionsContext);
}
