import useDateStore from "../../store/useDateStore";
import { TOTAL_DAYS } from "../../const/date";
import { isDayToday } from "../../util/isDayMonthYearToday";

const CalendarDays = () => {
  const { currentDate, setSelectedDate, selectedDate } = useDateStore();
  console.log(selectedDate);

  const getDays = () => {
    const days = [];

    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const daysInPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    const daysFromPrevMonth = firstDayOfMonth;
    const daysFromNextMonth = TOTAL_DAYS - (daysFromPrevMonth + daysInMonth);

    // Add previous month's last few days
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        daysInPrevMonth - i
      );
      days.push(
        <div
          key={`prev-${i}`}
          className={`day prev-month ${isDayToday(
            daysInPrevMonth - i,
            prevMonthDate,
            selectedDate
          )}`}
          onClick={() => setSelectedDate(prevMonthDate)}
        >
          {daysInPrevMonth - i}
        </div>
      );
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );

      days.push(
        <div
          key={i}
          className={`day ${isDayToday(i, currentMonthDate, selectedDate)}`}
          onClick={() => setSelectedDate(currentMonthDate)}
        >
          {i}
        </div>
      );
    }

    // Add next month's first few days
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const nextMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      );
      days.push(
        <div
          key={`next-${i}`}
          className={`day next-month ${isDayToday(
            i,
            nextMonthDate,
            selectedDate
          )}`}
          onClick={() => setSelectedDate(nextMonthDate)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return <div className="days">{getDays()}</div>;
};

export default CalendarDays;
