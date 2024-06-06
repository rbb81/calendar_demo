import { MONTHS_IN_YEAR } from "../../const/date";
import { isMonthToday } from "../../util/isDayMonthYearToday";

type CalendarMonthViewProps = {
  selectMonth: (arg0: number) => void;
  selectedDate: Date | null;
  currentDate: Date | null;
};

const CalendarMonthView = ({
  selectMonth,
  currentDate,
  selectedDate,
}: CalendarMonthViewProps) => {
  return (
    <div className="month-view">
      {MONTHS_IN_YEAR.map((month, index) => (
        <div
          key={month}
          className={`month ${isMonthToday(index, currentDate, selectedDate)}`}
          onClick={() => selectMonth(index)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};
export default CalendarMonthView;
