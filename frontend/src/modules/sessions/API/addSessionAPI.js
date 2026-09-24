import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function addSessionAPI(data){
    const res = await api.post(urlRoute.sessions + `/store`,data)
    return res.data.treatment_session
}