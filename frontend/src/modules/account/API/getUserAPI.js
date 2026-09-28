import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";


export async function getUserAPI() {
    const res = await api.get(urlRoute.auth + "/user",);
    return res.data.user;
}

