import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function loginAPI(data) {
  if (!data.email) throw new Error("خطأ: البريد الالكتروني مطلوب");
  if (!data.password) throw new Error("خطأ: كلمة المرور مطلوبة");
  const res = await api.post(urlRoute.auth + "/login", data);
  return res.data;
}
