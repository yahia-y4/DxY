import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function deleteAppoAPI(id) {
  if (!id) throw new Error("خطأ: معرف الموعد مطلوب");
  await api.delete(urlRoute.appointments + `/delete/${id}`);
  return id;
}
