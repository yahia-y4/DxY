import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function loginAPI(data) {
    if(!data.email || !data.password){
        throw new Error("خطا في المدخلات !")
    }
    const res = await api.post(urlRoute.auth + "/login",data);
    return res.data.token;
}

