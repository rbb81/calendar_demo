import { DAYS_IN_WEEK } from "../../const/date";
const CalendarDaysWeek = () => {
  return (
    <div className="days-of-week">
      {DAYS_IN_WEEK.map((day) => (
        <div key={day} className="day-name">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDaysWeek;
