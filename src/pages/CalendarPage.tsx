import { Calendar } from "../components/Calendar";
import CalenderData from "../components/CalenderData";

export const CalendarPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Calendar />
      <CalenderData />
    </div>
  );
};
