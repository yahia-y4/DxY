import "./accountInfo.css";
import { useAuth } from "../../../../context/authContext/useAuth";
import InfoWin from "../../../../components/infoWin/infoWin";
import Button from "../../../../components/button/button";
import {formatDate} from "../../../../helperFunctions/formatDate";
import { removeToken } from "../../../../auth/token";
import {useWarning} from "../../../../context/warningContext/useWarning"
export default function AccountInfo(){
    const {user,setIsAuth} = useAuth();
    const {showWarning} = useWarning();

    //functions
    function logout(){
        removeToken()
        setIsAuth(false)
    }

    function logoutClick(){
        const text = "هل تريد تسجيل الخروج ؟"
        showWarning(text,logout)
    }
    //-----
    return(
        <div className="accountInfo">
            
            <InfoWin data={user?.name} h={"50px"} lable={"الاسم"}/>
            <InfoWin data={user?.email} lable={"البريد الالكتروني"} h={"50px"}/>
            <InfoWin data={user?.specialization} lable={"التخصص"} h={"50px"}/>
            <InfoWin data={formatDate( user?.created_at)} lable={"تاريخ الانشاء"} h={"50px"}/>
            <Button onClick={logoutClick} lable={"تسجيل الخروج ->"}/>

        </div>
    )
}