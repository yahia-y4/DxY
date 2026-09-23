import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function editPatientAPI(data){
    const res = await api.post(urlRoute.patients + `/edit/${data.id}`,data)
    return res.data.patient
}