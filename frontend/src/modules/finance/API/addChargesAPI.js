import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addChargesAPI(data) {
    if(!data.patient_id) throw new Error("خطأ: المريض مطلوب");
    if(!data.amount) throw new Error("خطأ: المبلغ مطلوب");
    if(data.amount <= 0) throw new Error("خطأ: المبلغ يجب ان يكون اكبر من صفر");
    

    const res = await api.post(urlRoute.charges +`/add/${data.patient_id}`,data )
    return res.data.charge
}