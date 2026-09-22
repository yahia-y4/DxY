import Button from "../button/button";
import "./errorWin.css";
import { useContext } from "react";
import { ErrorContext } from "../../context/errorContext/errorContext";
export default function ErrorWin() {
  const { message, hideError } = useContext(ErrorContext);
  if (!message) {
    return null;
  }
  return (
    <div className="error-div">
      <div className="error">
        <p>{message}</p>
        <Button lable={"الغاء"} onClick={hideError} />
      </div>
    </div>
  );
}
