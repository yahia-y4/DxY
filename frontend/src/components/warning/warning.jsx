import "./warning.css";
import { useContext } from "react";
import { WarningContext } from "../../context/warningContext/warningContext";
import Button from "../button/button";
export default function Warning() {
  const { warning, warningFun, hideWarning } = useContext(WarningContext);

  if (!warning) return null;
  function handleConfirm() {
    warningFun?.();
    hideWarning();
  }
  return (
    <div className="warning-div">
      <div className="warning-win">
        <p>نص التحذير</p>
        <div className="warning-buts">
          <Button onClick={handleConfirm} lable={"موافق"} />
          <Button onClick={hideWarning} lable={"الغاء"} />
        </div>
      </div>
    </div>
  );
}
