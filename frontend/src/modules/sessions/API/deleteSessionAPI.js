import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function deleteSessionAPI(id) {
  await api.delete(urlRoute.sessions + `/delete/${id}`);
  return id;
}
