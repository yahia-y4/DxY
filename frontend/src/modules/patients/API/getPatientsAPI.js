import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function getPatientsAPI() {


  const res = await api.get(urlRoute.patients);
  return res.data.patients;
}
