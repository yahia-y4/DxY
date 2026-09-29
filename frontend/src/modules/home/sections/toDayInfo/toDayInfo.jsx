import "./toDayInfo.css";
import InfoWin from "../../../../components/infoWin/infoWin";
import { useGetDayCount } from "../../queries/useGetDayCount";
export default function ToDayInfo() {
    const {data} = useGetDayCount()
    console.log(data)
  return (
    <div className="toDayInfo-div">
      <InfoWin data={data?.sessionsCount} title={"عدد جلسات اليوم"} />
      <InfoWin data={data?.patientsCount} title={"المرضى المضافين اليوم"} />
      <InfoWin data={data?.appointmentsCount} title={"مواعيد اليوم"} />
      <InfoWin data={data?.appointmentsDoingCount} title={"المواعيد المنجزة اليوم"} />
    </div>
  );
}
