import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addSessionAPI(data){
     if (!data.patient_id) throw new Error("خطأ : يجب اختيار المريض");
     if (!data.name) throw new Error("خطأ : اسم الجلسة مطلوب");
     if(!data.teeth_number) throw new Error("خطأ : يجب اختيار السن");
    const res = await api.post(urlRoute.sessions + `/store`,data)
    return res.data.treatment_session
}