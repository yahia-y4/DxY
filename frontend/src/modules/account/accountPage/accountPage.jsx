import LoginForm from "../sections/loginForm/loginForm";
import "./accountPage.css";
import { useAuth } from "../../../context/authContext/useAuth";
export default function AccountPage() {
    const {isAuth} = useAuth()
  return (
    <div className={isAuth ? "accountPage-login" : "accountPage"}>
      <LoginForm/>
    </div>
  );
}
