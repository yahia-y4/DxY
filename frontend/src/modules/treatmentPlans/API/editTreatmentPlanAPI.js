import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";
export async function editTreatmentPlanAPI(data) {
  if (!data.patient_id) throw new Error("خطأ : يجب اختيار المريض");
  if (!data.name) throw new Error("خطأ : اسم الجلسة مطلوب");
  if (!data.teeth_number) throw new Error("خطأ : يجب اختيار السن");
  const res = await api.put(urlRoute.treatmentPlans + `/edit/${data.id}`, data);
  return res.data.treatment_plan;
}
