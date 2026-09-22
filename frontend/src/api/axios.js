import export default api; from "axios";
import { getToken, removeToken } from "../auth/token";
import { url } from "../auth/URL";

const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
    const token = getToken();

    if (!token) {
        return Promise.reject(new Error("NO_AUTH_TOKEN"));
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config;
})

api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response?.status === 401) {
            removeToken();
            // logout
        }

        return Promise.reject(error);
    }
);

export default api;