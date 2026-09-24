import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function getSessionsAPI() {

  const res = await api.get(urlRoute.sessions);
  return res.data.treatment_sessions;
}
