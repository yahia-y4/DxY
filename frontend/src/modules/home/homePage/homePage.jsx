import "./homePage.css";
import Time from "../sessions/time/time";
import Welcome from "../sessions/welcome/welcome";
import ToDayInfo from "../sessions/toDayInfo/toDayInfo";
import Reminder from "../sessions/reminder/reminder";
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
