import { create } from "zustand";

type DateStoreState = {
  currentDate: Date;
  selectedDate: Date | null;
  setSelectedDate: (date?: Date) => void;
  setCurrentDate: (date: Date) => void;
  prevMonth: () => void;
  nextMonth: () => void;
  prevYear: () => void;
  nextYear: () => void;
};

const useDateStore = create<DateStoreState>((set) => ({
  currentDate: new Date(),
  selectedDate: null,
  setSelectedDate: (date?: Date) =>
    set((state: DateStoreState) => ({
      ...state,
      selectedDate: date,
    })),
  setCurrentDate: (date: Date) =>
    set((state: DateStoreState) => ({
      ...state,
      currentDate: date,
    })),
  prevMonth: () =>
    set((state: DateStoreState) => ({
      ...state,
      currentDate: new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth() - 1,
        1
      ),
    })),
  nextMonth: () =>
    set((state: DateStoreState) => ({
      ...state,
      currentDate: new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth() + 1,
        1
      ),
    })),
  prevYear: () =>
    set((state: DateStoreState) => ({
      ...state,
      currentDate: new Date(
        state.currentDate.getFullYear() - 1,
        state.currentDate.getMonth(),
        1
      ),
    })),
  nextYear: () =>
    set((state: DateStoreState) => ({
      ...state,
      currentDate: new Date(
        state.currentDate.getFullYear() + 1,
        state.currentDate.getMonth(),
        1
      ),
    })),
}));

export default useDateStore;
