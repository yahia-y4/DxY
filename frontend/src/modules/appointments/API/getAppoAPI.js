import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function getAppoAPI() {

  const res = await api.get(urlRoute.appointments);
  return res.data.appointments;
}
