import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function deletePatientAPI(id) {
  await api.delete(urlRoute.patients + `/delete/${id}`);
  return id;
}
