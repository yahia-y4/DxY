import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";



export async function addAppoAPI(data) {
if (!data.patient_id) throw new Error("خطأ: المريض مطلوب");
if (!data.appointment_date) throw new Error("خطأ: تاريخ الموعد مطلوب");
if (!data.hour) throw new Error("خطأ: وقت الموعد مطلوب");
if (!data.vist_reason) throw new Error("خطأ: سبب الموعد مطلوب");
  const res = await api.post(urlRoute.appointments + "/store",data);
  return res.data.appointment;
}
