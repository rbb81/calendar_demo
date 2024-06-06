import Button from "../common/Button";

type CalendarHeaderProps = {
  isYearView: boolean;
  isMonthView: boolean;
  toggleYearView: () => void;
  toggleMonthView: () => void;
  prevMonth: () => void;
  prevYear: () => void;
  currentDate: Date;
  nextMonth: () => void;
  nextYear: () => void;
};

const CalendarHeader = ({
  prevMonth,
  isYearView,
  isMonthView,
  toggleYearView,
  toggleMonthView,
  prevYear,
  currentDate,
  nextMonth,
  nextYear,
}: CalendarHeaderProps) => {
  return (
    <div className="header">
      <Button
        isDisabled={isMonthView}
        onClick={isYearView ? prevYear : prevMonth}
      >
        &lt;
      </Button>

      <h2 onClick={isMonthView ? toggleYearView : toggleMonthView}>
        {isYearView
          ? `${currentDate.getFullYear() - 5} - ${
              currentDate.getFullYear() + 6
            }`
          : isMonthView
          ? currentDate.getFullYear()
          : `${currentDate.toLocaleString("default", {
              month: "long",
            })} ${currentDate.getFullYear()}`}
      </h2>

      <Button
        isDisabled={isMonthView}
        onClick={isYearView ? nextYear : nextMonth}
      >
        &gt;
      </Button>
    </div>
  );
};

export default CalendarHeader;
