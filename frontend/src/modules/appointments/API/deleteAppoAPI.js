import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function deleteAppoAPI(id) {
  await api.delete(urlRoute.appointments + `/delete/${id}`);
  return id;
}
