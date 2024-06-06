import { useState, useRef, useEffect } from "react";
import Calendar from "../Calendar";
import "./Datepicker.css";
import formatDate from "../../util/formatDate";

type DatePickerProps = {
  selectedDate: Date | null;
  setSelectedDate: (arg: Date) => void;
  currentDate: Date;
  setCurrentDate: (arg: Date) => void;
};

const DatePicker = ({
  selectedDate,
  setSelectedDate,
  currentDate,
  setCurrentDate,
}: DatePickerProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const inputRef = useRef<any>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setCurrentDate(selectedDate || new Date());
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="date-picker" ref={inputRef}>
      <input
        type="text"
        value={formatDate(selectedDate)}
        readOnly
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      />
      {isCalendarOpen && (
        <Calendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          handleDateSelect={handleDateSelect}
        />
      )}
    </div>
  );
};

export default DatePicker;
