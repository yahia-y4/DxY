import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function editAppoAPI(data) {

  const res = await api.put(urlRoute.appointments + `/edit/${data.id}`,data);
  return res.data.appointment;
}
