import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addChargesAPI(data) {
    if(!data.patient_id || !data.amount || data.note || data.amount <= 0){
        throw new Error("خطأ في المدخلات !!")
    }
    const res = await api.post(urlRoute.charges +`/add/${data.patient_id}`,data )
    return res.data.charge
}