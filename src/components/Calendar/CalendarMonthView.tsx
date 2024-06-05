import { MONTHS_IN_YEAR } from "../../const/date";
import useDateStore from "../../store/useDateStore";
import { isMonthToday } from "../../util/isDayMonthYearToday";

type CalendarMonthViewProps = {
  setIsMonthView: (arg0: boolean) => void;
  setIsYearView: (arg0: boolean) => void;
};

const CalendarMonthView = ({
  setIsMonthView,
  setIsYearView,
}: CalendarMonthViewProps) => {
  const { currentDate, setCurrentDate } = useDateStore();
  const selectMonth = (monthIndex: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
    setIsMonthView(false);
    setIsYearView(false);
  };
  return (
    <div className="month-view">
      {MONTHS_IN_YEAR.map((month, index) => (
        <div
          key={month}
          className={`month ${isMonthToday(index)}`}
          onClick={() => selectMonth(index)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};
export default CalendarMonthView;
