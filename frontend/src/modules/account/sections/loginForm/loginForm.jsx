import "./loginForm.css";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import { useState } from "react";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
import { setToken } from "../../../../auth/token";
import { useLogin } from "../../queries/useLogin";
import { useError } from "../../../../context/errorContext/useError";
import { useAuth } from "../../../../context/authContext/useAuth";
import { useLoading } from "../../../../context/loadingContext/useLoading";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = useLogin();
  const { showError } = useError();
  const {setIsAuth} = useAuth();
  const {showLoading, hideLoading } = useLoading();

  // functions
  function handleLogin() {
showLoading();
    login.mutate(formData, {
      onSuccess: (data) => {
        setIsAuth(true)
        setToken(data.token);
        emptyData();
        hideLoading()
      
      },
      onError: (e) => {
        showError(e.message);
        hideLoading()
      },
    });
  }

  function emptyData() {
    setFormData({
      email: "",
      password: "",
    });
  }
  //---
  return (
    <div className="LoginForm">
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        value={formData.email}
        name={"email"}
        label={"البريد الالكتروني"}
      />
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        value={formData.password}
        name={"password"}
        label={"كلمة السر"}
      />
      <div className="LoginForm-buts">
        <Button onClick={handleLogin} lable={"تسجيل الدخول"} />
        <Button onClick={emptyData} lable={"الغاء"} />
      </div>
    </div>
  );
}
