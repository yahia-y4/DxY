import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";
export async function deleteTreatmentPlanAPI(id) {
  await api.delete(urlRoute.treatmentPlans + `/delete/${id}`);
  return id;
}
