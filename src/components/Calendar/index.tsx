import { useState } from "react";
import "./Calendar.css";
import CalendarDaysWeek from "./CalendarDaysWeek";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarMonthView from "./CalendarMonthView";
import CalendarYearView from "./CalendarYearView";

const Calendar = () => {
  const [isMonthView, setIsMonthView] = useState(false);
  const [isYearView, setIsYearView] = useState(false);

  const toggleMonthView = () => {
    setIsMonthView(!isMonthView);
    setIsYearView(false);
  };

  const toggleYearView = () => {
    setIsYearView(!isYearView);
    setIsMonthView(!isMonthView);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        isYearView={isYearView}
        isMonthView={isMonthView}
        toggleYearView={toggleYearView}
        toggleMonthView={toggleMonthView}
      />
      {isYearView ? (
        <CalendarYearView
          setIsMonthView={setIsMonthView}
          setIsYearView={setIsYearView}
        />
      ) : isMonthView ? (
        <CalendarMonthView
          setIsMonthView={setIsMonthView}
          setIsYearView={setIsYearView}
        />
      ) : (
        <>
          <CalendarDaysWeek />
          <CalendarDays />
        </>
      )}
    </div>
  );
};

export default Calendar;
