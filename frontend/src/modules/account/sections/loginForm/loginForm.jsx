import "./loginForm.css";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import { useState } from "react";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  return (
    <div className="LoginForm">
      <Input onChange={(e)=>handleInputs(setFormData,e)} value={formData.email} name={"email"} label={"البريد الالكتروني"} />
      <Input onChange={(e)=>handleInputs(setFormData,e)} value={formData.password} name={"password"} label={"كلمة السر"} />
      <div className="LoginForm-buts">
        <Button lable={"تسجيل الدخول"} />
        <Button lable={"الغاء"} />
      </div>
    </div>
  );
}
