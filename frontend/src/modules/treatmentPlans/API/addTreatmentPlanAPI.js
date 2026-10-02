import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";
export async function addTreatmentPlanAPI(data) {
  if (!data.name) throw new Error("خطأ : اسم خطة العلاج مطلوب");
  if (!data.patient_id) throw new Error("خطأ : يجب اختيار المريض");
  if (!data.description) throw new Error("خطأ : وصف خطة العلاج مطلوب");
  const res = await api.post(urlRoute.treatmentPlans + "/store", data);
  return res.data.treatment_plan;
}
