import { TOTAL_DAYS } from "../../const/date";
import { isDayToday } from "../../util/isDayMonthYearToday";

type CalendarDaysProps = {
  currentDate: Date;
  selectedDate: Date | null;
  handleDateSelect: (arg: Date) => void;
};

const CalendarDays = ({
  currentDate,
  selectedDate,
  handleDateSelect,
}: CalendarDaysProps) => {
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

  const days = [];
  const daysFromPrevMonth = firstDayOfMonth;
  const daysFromNextMonth = TOTAL_DAYS - (daysFromPrevMonth + daysInMonth);

  const selectDate = (date: Date) => {
    handleDateSelect(date);
  };

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
        className="day prev-month"
        onClick={() => selectDate(prevMonthDate)}
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
        onClick={() => selectDate(currentMonthDate)}
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
        className="day next-month"
        onClick={() => selectDate(nextMonthDate)}
      >
        {i}
      </div>
    );
  }

  return <div className="days">{days}</div>;
};

export default CalendarDays;
