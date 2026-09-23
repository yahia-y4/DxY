import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addPatientAPI(data){
    const res = await api.post(urlRoute.patients + "/store",data)
    return res.data.patient
}