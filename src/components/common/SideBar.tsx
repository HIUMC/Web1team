import { useState } from "react";
import CalenderIcon from "../../assets/icons/Calender.svg";
import GraphIcon from "../../assets/icons/Graph.svg";
import SettingIcon from "../../assets/icons/Setting.svg";

export default function SideBar() {
  return (
    <>
      <div className="w-60 h-[1646px] bg-white inline-flex flex-col justify-start items-start gap-2.5 pt-[82px]">
        <div className="w-60 flex flex-col justify-start items-start">
          <button className="self-stretch pl-6 py-4 bg-gray-200 inline-flex justify-start items-center gap-2 cursor-pointer">
            <img src={CalenderIcon} alt="달력 아이콘" />
            <div className="justify-start text-neutral-800 text-lg font-semibold font-['Pretendard']">
              달력
            </div>
          </button>
          <button className="self-stretch pl-6 py-4 inline-flex justify-start items-center gap-2 cursor-pointer">
            <img src={GraphIcon} alt="그래프(월별 통계) 아이콘" />
            <div className="justify-start text-gray-500 text-lg font-normal font-['Pretendard']">
              월별 통계
            </div>
          </button>
          <button className="self-stretch pl-6 py-4 inline-flex justify-start items-center gap-2 cursor-pointer">
            <img src={SettingIcon} alt="설정 아이콘" />
            <div className="justify-start text-gray-500 text-lg font-normal font-['Pretendard']">
              설정
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
