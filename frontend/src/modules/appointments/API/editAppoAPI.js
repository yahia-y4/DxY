import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function editAppoAPI(data) {
  if (!data.appointment_date) throw new Error("خطأ: تاريخ الموعد مطلوب");
  if (!data.hour) throw new Error("خطأ: وقت الموعد مطلوب");
  if (!data.vist_reason) throw new Error("خطأ: سبب الموعد مطلوب");
  const res = await api.put(urlRoute.appointments + `/edit/${data.id}`, data);
  return res.data.appointment;
}
