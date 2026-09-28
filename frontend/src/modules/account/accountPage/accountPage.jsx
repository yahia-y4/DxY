import LoginForm from "../sections/loginForm/loginForm";
import "./accountPage.css";
import { useAuth } from "../../../context/authContext/useAuth";
import AccountInfo from "../sections/accountInfo/accountInfo";
export default function AccountPage() {
  const { isAuth } = useAuth();

  return (
    <div className={isAuth ? "accountPage-login" : "accountPage"}>
      {isAuth ? <AccountInfo /> : <LoginForm />}
    </div>
  );
}
