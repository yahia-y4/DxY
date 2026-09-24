import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function editSessionAPI(data) {
  const res = await api.put(urlRoute.sessions + `/edit/${data.id}`, data);
  return res.data.treatment_session;
}
