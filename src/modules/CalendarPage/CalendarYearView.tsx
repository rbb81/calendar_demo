import useDateStore from "../../store/useDateStore";
import { isYearToday } from "../../util/isDayMonthYearToday";

type CalendarYearViewProps = {
  setIsMonthView: (arg: boolean) => void;
  setIsYearView: (arg: boolean) => void;
};

const CalendarYearView = ({
  setIsMonthView,
  setIsYearView,
}: CalendarYearViewProps) => {
  const { currentDate, setCurrentDate, selectedDate } = useDateStore();
  const years = [];
  const currentYear = currentDate.getFullYear();

  const selectYear = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setIsYearView(false);
    setIsMonthView(true);
  };

  for (let i = currentYear - 5; i <= currentYear + 6; i++) {
    years.push(
      <div
        key={i}
        className={`year ${isYearToday(i, selectedDate)}`}
        onClick={() => selectYear(i)}
      >
        {i}
      </div>
    );
  }

  return <div className="year-view">{years}</div>;
};

export default CalendarYearView;
