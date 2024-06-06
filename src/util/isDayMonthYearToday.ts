export const isDayToday = (
  i: number,
  currentMonthDate: Date,
  selectedDate: Date | null
) => {
  const today = new Date();
  return i === selectedDate?.getDate() &&
    currentMonthDate.getMonth() === selectedDate?.getMonth() &&
    currentMonthDate.getFullYear() === selectedDate?.getFullYear()
    ? "selected"
    : i === today?.getDate() &&
      currentMonthDate.getMonth() === today?.getMonth() &&
      currentMonthDate.getFullYear() === today?.getFullYear()
    ? "date-today"
    : "";
};

export const isMonthToday = (
  key: number,
  currentDate: Date | null,
  selectedDate: Date | null
) => {
  const today = new Date();

  if (
    selectedDate?.getMonth() === key &&
    selectedDate?.getFullYear() === currentDate?.getFullYear()
  ) {
    return "selected";
  }

  if (
    today.getMonth() === key &&
    today.getFullYear() === currentDate?.getFullYear()
  ) {
    return "date-today";
  }
  return "";
};

export const isYearToday = (key: number, selectedDate: Date | null) => {
  const today = new Date();
  if (selectedDate?.getFullYear() === key) {
    return "selected";
  }

  if (today.getFullYear() === key) {
    return "date-today";
  }
  return "";
};
