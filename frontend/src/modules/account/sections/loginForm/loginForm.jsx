import "./loginForm.css";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import { useState } from "react";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
import { setToken } from "../../../../auth/token";
import { useLogin } from "../../queries/useLogin";
import { useError } from "../../../../context/errorContext/useError";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = useLogin();
  const { showError } = useError();

  // functions
  function handleLogin() {
    login.mutate(formData, {
      onSuccess: (token) => {
        setToken(token);
        emptyData();
      },
      onError: (e) => {
        showError(e.message);
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
