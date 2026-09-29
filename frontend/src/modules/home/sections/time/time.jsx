import "./time.css";
import { useEffect, useState } from "react";

export default function Time() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "مساءً" : "صباحًا";
  const displayHour = hours % 12 || 12;

  const time = `${displayHour}:${minutes} ${period}`;

  const date = `${now.getFullYear()} / ${String(
    now.getMonth() + 1
  ).padStart(2, "0")} / ${String(now.getDate()).padStart(2, "0")}`;

  const day = now.toLocaleDateString("ar", {
    weekday: "long",
  });

  return (
    <div className="time-div">
      <div className="hour">{time}</div>
      <div className="date">{date}</div>
      <div className="day">{day}</div>
    </div>
  );
}