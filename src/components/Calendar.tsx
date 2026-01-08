import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import "../styles/CalendarCustom.css"

export const Calendar = () => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <div className="flex flex-col items-start gap-2.5 p-6 rounded-lg bg-[var(--Grayscale-200)] self-stretch">
        <div className='flex px-[8px] items-center gap-[10px] self-stretch'>
            <span
                className="text-[20px] font-medium leading-[150%] tracking-[-0.4px] text-[var(--Grayscale-800)]"
            >
                날짜
            </span>
        </div>
        <div className="flex items-center justify-between px-5 py-4 self-stretch rounded-lg border border-grayscale-400 bg-white">
        <div
            className="text-[20px] font-normal leading-[150%] tracking-[-0.4px]"
            style={{ color: 'var(--Grayscale-900, #202227)' }}
        >
            {date.toLocaleDateString()}
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        >
            <path d="M21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20ZM9 18H7V16H9V18ZM9 14H7V12H9V14ZM13 18H11V16H13V18ZM13 14H11V12H13V14ZM17 18H15V16H17V18ZM17 14H15V12H17V14ZM19 9H5V7H19V9Z" fill="#666B76"/>
        </svg>
      </div>
      <div className='flex flex-col items-start gap-[10px] p-[24px] self-stretch rounded-[8px] bg-[#E9EBEF] shadow-[0_4px_20px_0_rgba(0,0,0,0.10)]'>
        <ReactCalendar
            onChange={(value) => setDate(value as Date)}
            value={date}
            className="flex flex-col items-start gap-6 text-[24px] font-normal font-Pretendard leading-[150%] tracking-[-0.48px] text-[var(--Grayscale-900)]"
            navigationLabel={({ date }) => (
                <span className="text-lg font-semibold">
                    {date.getFullYear()}년 {date.getMonth() + 1}월
                </span>
            )}
            prevLabel={<img src="src\assets\left_arrow.svg" className='w-[24px] h-[24px]'/>}
            nextLabel={<img src="src\assets\right_arrow.svg" className='w-[24px] h-[24px]'/>}
            prev2Label={null}
            next2Label={null}
            formatDay={(locale, date) => date.getDate().toString()}
        />
      </div>
    </div>
  )
}

