import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function editTreatmentPlanAPI(data) {
if(!data.name || !data.description){
  throw new Error("بيانات الخطة ناقصة الرجاء التأكد منها!!")
}
  const res = await api.put(urlRoute.treatmentPlans + `/edit/${data.id}`,data);
  return res.data.treatment_plan;
}
