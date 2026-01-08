import { Calendar } from "../components/Calendar";
import CalenderData from "../components/CalenderData";

export const CalendarPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Calendar />
      <CalenderData
        monthlyPay={99_999_999_999}
        allowance={99_999_999_999}
        food={99_999_999_999}
        finance={999_999_999_999}
        date="12/30 (화)"
      />
    </div>
  );
};
