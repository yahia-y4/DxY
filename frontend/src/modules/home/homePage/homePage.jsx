import "./homePage.css";
import Time from "../sections/time/time";
import Welcome from "../sections/welcome/welcome";
import ToDayInfo from "../sections/toDayInfo/toDayInfo";
import Reminder from "../sections/reminder/reminder";
export default function HomePage() {
  return (
    <div className="homePage">
      <Time />
      <Welcome/>
      <ToDayInfo/>
      <Reminder/>
    </div>
  );
}
