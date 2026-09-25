const TOKEN_KEY = "auth_token";

export const getToken = () => {
  return "1|Qm5lkbeNiyvYwVaRTt6vYhMo5JDAer8Sx7ro6lgR3f517b30";
  // return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
