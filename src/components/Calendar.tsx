export const Calendar = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="w-[360px] bg-white rounded-xl p-4">
      <div className="flex items-center justify-between px-5 py-4 self-stretch rounded-lg border border-grayscale-400 bg-white">
        <div
            className="text-[20px] font-normal leading-[150%] tracking-[-0.4px]"
            style={{ color: 'var(--Grayscale-900, #202227)' }}
        >
            2025-01-01
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20ZM9 18H7V16H9V18ZM9 14H7V12H9V14ZM13 18H11V16H13V18ZM13 14H11V12H13V14ZM17 18H15V16H17V18ZM17 14H15V12H17V14ZM19 9H5V7H19V9Z" fill="#666B76"/>
        </svg>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button>{'<'}</button>
        <h2 className="text-lg font-semibold">2026년 1월</h2>
        <button>{'>'}</button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
        {days.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            {i + 1 <= 31 ? i + 1 : ''}
          </div>
        ))}
      </div>
    </div>
  )
}
