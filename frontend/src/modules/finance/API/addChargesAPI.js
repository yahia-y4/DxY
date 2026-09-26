import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addChargesAPI(data) {
    const res = await api.post(urlRoute.charges +`/add/${data.patient_id}`,data )
    return res.data.charge
}