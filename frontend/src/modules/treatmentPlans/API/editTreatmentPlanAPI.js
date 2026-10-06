import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";
export async function editTreatmentPlanAPI(data) {
  if (!data.name) throw new Error("خطأ : اسم الخطة مطلوب");
  if (!data.description) throw new Error("خطأ : وصف خطة العلاج مطلوب");
  const res = await api.put(urlRoute.treatmentPlans + `/edit/${data.id}`, data);
  return res.data.treatment_plan;
}
