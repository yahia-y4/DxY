import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addPaymentAPI(data) {
    const res = await api.post(urlRoute.payment +`/add/${data.patient_id}`,data )
    return res.data.payment
}