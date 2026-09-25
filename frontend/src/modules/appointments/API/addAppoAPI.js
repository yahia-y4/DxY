import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addAppoAPI(data) {

  const res = await api.post(urlRoute.appointments + "/store",data);
  return res.data.appointment;
}
