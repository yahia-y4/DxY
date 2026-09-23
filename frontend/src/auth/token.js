const TOKEN_KEY = "auth_token";

export const getToken = () => {
  return "2|WNJ44BEFBjFLBjVi7JXiDcER5sMQkRh0XygLLI0ebf42df57";
  // return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
