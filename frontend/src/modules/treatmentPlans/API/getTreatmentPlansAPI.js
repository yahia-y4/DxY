import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function getTreatmentPlansAPI() {

  const res = await api.get(urlRoute.treatmentPlans);
  return res.data.treatment_plans;
}
