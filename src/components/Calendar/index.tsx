import { useState } from "react";
import "./Calendar.css";
import CalendarDaysWeek from "./CalendarDaysWeek";
import CalendarMonthView from "./CalendarMonthView";
import CalendarYearView from "./CalendarYearView";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";

type CalendarProps = {
  currentDate: Date;
  setCurrentDate: (arg: Date) => void;
  selectedDate: Date | null;
  handleDateSelect: (arg: Date) => void;
};

const Calendar = ({
  currentDate,
  setCurrentDate,
  selectedDate,
  handleDateSelect,
}: CalendarProps) => {
  const [isMonthView, setIsMonthView] = useState(false);
  const [isYearView, setIsYearView] = useState(false);

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevYear = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1)
    );
  };

  const nextYear = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1)
    );
  };

  const toggleMonthView = () => {
    setIsMonthView(!isMonthView);
    setIsYearView(false);
  };

  const toggleYearView = () => {
    setIsYearView(!isYearView);
    setIsMonthView(!isMonthView);
  };

  const selectMonth = (monthIndex: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
    setIsMonthView(false);
    setIsYearView(false);
  };

  const selectYear = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setIsYearView(false);
    setIsMonthView(true);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        currentDate={currentDate}
        prevMonth={prevMonth}
        isYearView={isYearView}
        isMonthView={isMonthView}
        toggleYearView={toggleYearView}
        toggleMonthView={toggleMonthView}
        prevYear={prevYear}
        nextMonth={nextMonth}
        nextYear={nextYear}
      />
      {isYearView ? (
        <CalendarYearView
          currentDate={currentDate}
          selectYear={selectYear}
          selectedDate={selectedDate}
        />
      ) : isMonthView ? (
        <CalendarMonthView
          selectMonth={selectMonth}
          selectedDate={selectedDate}
          currentDate={currentDate}
        />
      ) : (
        <>
          <CalendarDaysWeek />
          <CalendarDays
            currentDate={currentDate}
            selectedDate={selectedDate}
            handleDateSelect={handleDateSelect}
          />
        </>
      )}
    </div>
  );
};

export default Calendar;
