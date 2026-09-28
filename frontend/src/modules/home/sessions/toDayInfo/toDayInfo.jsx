import "./toDayInfo.css";
import InfoWin from "../../../../components/infoWin/infoWin";
export default function ToDayInfo() {
  return (
    <div className="toDayInfo-div">
      <InfoWin data={"7"} title={"عدد جلسات اليوم"} />
      <InfoWin data={"3"} title={"المرضى المضافين اليوم"} />
      <InfoWin data={"10"} title={"مواعيد اليوم"} />
      <InfoWin data={"6"} title={"المواعيد المنجزة اليوم"} />
    </div>
  );
}
