import { useState } from "react";
import SmallDownArrow from "../../src/assets/icons/small arrow.svg";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-56 h-[60px] inline-flex flex-col justify-start items-start relative">
        <div className=" self-stretch px-5 py-4 bg-white rounded-lg border border-1 border-zinc-400 inline-flex justify-between items-center">
          <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
            2025년 12월
          </div>
          <button
            className="w-6 h-6 relative cursor-pointer"
            onClick={handleToggle}
          >
            <div className="w-6 h-6 left-0 top-0 absolute" />
            <img src={SmallDownArrow} alt="드롭다운 보기" />
          </button>
        </div>
        {isOpen && (
          <div className="absolute w-[219px] top-[66px] self-stretch bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start z-[9999]">
            <div className="self-stretch px-5 py-4 inline-flex justify-start items-center gap-2.5 hover:bg-gray-100 cursor-pointer">
              <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
                2025년 10월
              </div>
            </div>
            <div className="self-stretch px-5 py-4 inline-flex justify-start items-center gap-2.5 hover:bg-gray-100 cursor-pointer">
              <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
                2025년 11월
              </div>
            </div>
            <div className="self-stretch px-5 py-4 inline-flex justify-start items-center gap-2.5 hover:bg-gray-100 cursor-pointer">
              <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
                2025년 12월
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
/*
<div className="self-stretch bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start">
          <div className="self-stretch px-5 py-4 inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
              2025년 10월
            </div>
          </div>
          <div className="self-stretch px-5 py-4 inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
              2025년 11월
            </div>
          </div>
          <div className="self-stretch px-5 py-4 inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
              2025년 12월
            </div>
          </div>
        </div>

*/
