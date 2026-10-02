import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";
export async function addPatientAPI(data) {
  if (!data.name) throw new Error("خطأ: الاسم مطلوب");
  if (!data.father_name) throw new Error("خطأ: اسم الاب مطلوب");
  if (!data.nick_name) throw new Error("خطأ: الاسم المستعار مطلوب");
  const res = await api.post(urlRoute.patients + "/store", data);
  return res.data.patient;
}
