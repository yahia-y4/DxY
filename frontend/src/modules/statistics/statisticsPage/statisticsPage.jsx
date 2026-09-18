import "./statisticsPage.css";
import InfoWin from "../../../components/infoWin/infoWin";
export default function StatisticsPage() {
  return (
    <div className="statistics-page">
      
      <InfoWin title={"عدد المرضى"} data={"123"} w={"200px"} h={"100px"}/>
      <InfoWin title={"عدد الجلسات"} data={"508"} w={"200px"} h={"100px"}/>
      <InfoWin title={"عدد الخطط"} data={"50"} w={"200px"} h={"100px"}/>
      <InfoWin title={"مجموع الديون"} data={"200$"} w={"200px"} h={"100px"}/>
      <InfoWin title={"مجموع الواردات"} data={"1000$"} w={"200px"} h={"100px"}/>
      <InfoWin title={"محموع الواردات مع احتساب الديون"} data={"1200$"} w={"300px"} h={"100px"}/>
      <InfoWin title={""} data={""} w={"200px"} h={"100px"}/>
   
    </div>
  );
}