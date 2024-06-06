import "./App.css";
import Calendar from "./modules/CalendarPage";
import DatePicker from "./components/DatePicker";
import { useState } from "react";
import Button from "./components/common/Button";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPageView, setIsPageView] = useState(true);

  const changeViewHandler = () => {
    setIsPageView(!isPageView);
  };

  return (
    <>
      <Button onClick={changeViewHandler}>
        <p>{isPageView ? "Try Component" : "Try Page"}</p>
      </Button>
      {isPageView ? (
        <>
          <div>
            This is a Page View (Module) where I use Zustand to manage the state
            of the calendar, making the state shareable with other components by
            using Zustand's create store function.
          </div>

          <Calendar />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>This is a DatePicker component</div>
          <div>
            <ul>
              <li>
                <strong>DatePickerProps:</strong>
                <ul>
                  <li>
                    <code>selectedDate: Date | null</code>
                  </li>
                  <li>
                    <code>setSelectedDate: (arg: Date) =&gt; void</code>
                  </li>
                  <li>
                    <code>currentDate: Date</code>
                  </li>
                  <li>
                    <code>setCurrentDate: (arg: Date) =&gt; void</code>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <DatePicker
            selectedDate={selectedDate}
            currentDate={currentDate}
            setSelectedDate={setSelectedDate}
            setCurrentDate={setCurrentDate}
          />
        </div>
      )}
    </>
  );
}

export default App;
