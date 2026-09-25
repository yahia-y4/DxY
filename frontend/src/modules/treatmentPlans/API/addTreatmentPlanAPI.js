import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addTreatmentPlanAPI(data) {
if(!data.name || !data.patient_id || !data.description){
  throw new Error("بيانات الخطة ناقصة الرجاء التأكد منها!!")
}
  const res = await api.post(urlRoute.treatmentPlans + "/store",data);
  return res.data.treatment_plan;
}
