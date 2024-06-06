import useDateStore from "../../store/useDateStore";
import Button from "../../components/common/Button";

type CalendarHeaderProps = {
  isYearView: boolean;
  isMonthView: boolean;
  toggleYearView: () => void;
  toggleMonthView: () => void;
};

const CalendarHeader = ({
  isYearView,
  isMonthView,
  toggleYearView,
  toggleMonthView,
}: CalendarHeaderProps) => {
  const { prevMonth, nextMonth, currentDate, prevYear, nextYear } =
    useDateStore();

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
