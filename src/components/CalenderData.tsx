import bagIcon from "../assets/icons/material-symbols_work.svg";
import moneyBagIcon from "../assets/icons/material-symbols_money-bag-outline-rounded.svg";
import foodIcon from "../assets/icons/mdi_food.svg";
import moneyIcon from "../assets/icons/tdesign_bill.svg";
import trashBinIcon from "../assets/icons/trashBinBlack.svg";

interface calenderDataProps {
  date: string;
  monthlyPay: number;
  allowance: number;
  food: number;
  finance: number;
}

export default function CalenderData({
  date,
  monthlyPay,
  allowance,
  food,
  finance,
}: calenderDataProps) {
  return (
    <>
      <div className="self-stretch bg-white rounded-tl-lg rounded-tr-lg inline-flex flex-col justify-start items-start">
        <div className="self-stretch px-6 pt-6 pb-4 inline-flex justify-start items-center gap-2.5">
          <div className="justify-start text-neutral-800 text-2xl font-normal font-['Pretendard'] leading-9">
            {date}
          </div>
        </div>
        <div className="self-stretch px-6 py-4 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <img src={bagIcon} alt="월급 아이콘" />
            <div className="justify-start text-neutral-800 text-2xl font-semibold font-['Pretendard'] leading-9">
              월급
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="flex justify-start items-center gap-2">
              <div className="flex justify-start items-center gap-0.5">
                <div className="justify-start text-indigo-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  +
                </div>
                <div className="justify-start text-indigo-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  {monthlyPay}
                </div>
              </div>
              <div className="justify-start text-indigo-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                원
              </div>
            </div>
            <div className="pl-4 pr-5 py-3 bg-gray-100 rounded-lg flex justify-start items-center gap-2">
              <img src={trashBinIcon} alt="쓰레기통 아이콘" />
              <div className="justify-start text-zinc-700 text-xl font-semibold font-['Pretendard'] leading-8">
                삭제
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="flex justify-start items-end gap-4">
            <img src={moneyBagIcon} alt="용돈 아이콘" />
            <div className="justify-start text-neutral-800 text-2xl font-semibold font-['Pretendard'] leading-9">
              용돈
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="flex justify-start items-center gap-2">
              <div className="flex justify-start items-center gap-0.5">
                <div className="justify-start text-indigo-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  +
                </div>
                <div className="justify-start text-indigo-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  {allowance}
                </div>
              </div>
              <div className="justify-start text-indigo-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                원
              </div>
            </div>
            <div className="pl-4 pr-5 py-3 bg-gray-100 rounded-lg flex justify-center items-center gap-2">
              <img src={trashBinIcon} alt="쓰레기통 아이콘" />
              <div className="justify-start text-zinc-700 text-xl font-semibold font-['Pretendard'] leading-8">
                삭제
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="flex justify-start items-end gap-4">
            <img src={foodIcon} alt="식비 아이콘" />
            <div className="justify-start text-neutral-800 text-2xl font-semibold font-['Pretendard'] leading-9">
              식비
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="flex justify-start items-center gap-2">
              <div className="flex justify-start items-center gap-0.5">
                <div className="justify-start text-red-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  -
                </div>
                <div className="justify-start text-red-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  {food}
                </div>
              </div>
              <div className="justify-start text-red-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                원
              </div>
            </div>
            <div className="pl-4 pr-5 py-3 bg-gray-100 rounded-lg flex justify-center items-center gap-2">
              <img src={trashBinIcon} alt="쓰레기통 아이콘" />
              <div className="justify-start text-zinc-700 text-xl font-semibold font-['Pretendard'] leading-8">
                삭제
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="flex justify-start items-end gap-4">
            <img src={moneyIcon} alt="금융 아이콘" />
            <div className="justify-start text-neutral-800 text-2xl font-semibold font-['Pretendard'] leading-9">
              금융
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="flex justify-start items-center gap-2">
              <div className="flex justify-start items-center gap-0.5">
                <div className="justify-start text-red-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  -
                </div>
                <div className="justify-start text-red-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                  {finance}
                </div>
              </div>
              <div className="justify-start text-red-500 text-2xl font-semibold font-['Pretendard'] leading-9">
                원
              </div>
            </div>
            <div className="pl-4 pr-5 py-3 bg-gray-100 rounded-lg flex justify-center items-center gap-2">
              <img src={trashBinIcon} alt="쓰레기통 아이콘" />
              <div className="justify-start text-zinc-700 text-xl font-semibold font-['Pretendard'] leading-8">
                삭제
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 pt-4 pb-8 bg-white rounded-bl-lg rounded-br-lg inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-1">
              <div className="justify-start text-gray-500 text-xl font-normal font-['Pretendard'] leading-8">
                수입 합계 :{" "}
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="justify-start text-gray-500 text-xl font-normal font-['Pretendard'] leading-8">
                  199,999,999,998
                </div>
                <div className="justify-start text-gray-500 text-xl font-normal font-['Pretendard'] leading-8">
                  원
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="justify-start text-gray-500 text-xl font-normal font-['Pretendard'] leading-8">
                지출 합계 :{" "}
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="justify-start text-gray-500 text-xl font-normal font-['Pretendard'] leading-8">
                  100,999,999,998
                </div>
                <div className="justify-start text-gray-500 text-xl font-normal font-['Pretendard'] leading-8">
                  원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
