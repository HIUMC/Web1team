import { useState } from "react"

const [mode, setMode] = useState<"income" | "expense">("income");

const selectIncome = () => {
    setMode("income")
}

const selectExpense = () => {
    setMode("expense")
}

export const Modal = () => {
    return (
        <div>
            <div className="fixed w-[693px] h-[1027px] py-[24px] gap-[16px] flex flex-col items-end">
                <div className="flex items-center justify-between pl-[24px] pr-[20px]">
                    <h1
                        className="text-[24px] font-semibold leading-[150%] tracking-[-0.48px]"
                        style={{ color: 'var(--Grayscale-900, #202227)' }}
                    >
                        수입·지출 내역 추가
                    </h1>
                    <img src="src\assets\X.svg" className="w-[32px] h-[32px]"/>
                </div>
                <div className="flex flex-row">
                    <button onClick={selectIncome} className="px-[10px] py-[20px] gap-[10px] flex justify-center items-center">수입</button>
                    <button onClick={selectExpense} className="px-[10px] py-[20px] gap-[10px] flex justify-center items-center">지출</button>
                </div>
            </div>
        </div>
    )
}