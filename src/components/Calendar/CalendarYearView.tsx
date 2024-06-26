import { isYearToday } from "../../util/isDayMonthYearToday";

type CalendarYearViewProps = {
  currentDate: Date;
  selectYear: (arg: number) => void;
  selectedDate: Date | null;
};

const CalendarYearView = ({
  currentDate,
  selectYear,
  selectedDate,
}: CalendarYearViewProps) => {
  const years = [];
  const currentYear = currentDate.getFullYear();
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
