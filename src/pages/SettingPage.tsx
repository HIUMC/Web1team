import { useState } from "react";
import moonIcon from "../assets/icons/Group 205.svg";
import sunIcon from "../assets/icons/Group 206.svg";
import checkIcon from "../assets/icons/Success.svg";
import trashBinIcon from "../assets/icons/trashBin.svg";
import bagIcon from "../assets/icons/material-symbols_work.svg";
import moneyIcon from "../assets/icons/akar-icons_money.svg";
import carIcon from "../assets/icons/bitcoin-icons_car-filled.svg";
import coffeeIcon from "../assets/icons/ci_coffe-to-go.svg";
import menuIcon from "../assets/icons/ix_more-menu.svg";
import moneyBagIcon from "../assets/icons/material-symbols_money-bag-outline-rounded.svg";
import alcholIcon from "../assets/icons/mdi_alcohol.svg";
import foodIcon from "../assets/icons/mdi_food.svg";
import toiletPaperIcon from "../assets/icons/mingcute_toilet-paper-line.svg";
import tabletCardIcon from "../assets/icons/tabler_credit-card-pay.svg";
import billIcon from "../assets/icons/tdesign_bill.svg";
import trashBinGray from "../assets/icons/trashBinGray.svg";
import plusIcon from "../assets/icons/plus.svg";
import SettingCategory from "../components/SettingCategory";

export default function SettingPage() {
  const [isLight, setIsLight] = useState(true);
  const handleToggle = () => {
    setIsLight((prev) => !prev);
  };
  return (
    <div className="h-dvh w-full bg-gray-100">
      <div className="pt-[32px] w-[1131px] pl-[32px]">
        <div className="self-stretch justify-start text-neutral-800 text-2xl font-semibold font-['Pretendard'] leading-9">
          설정
        </div>
        <div className="pt-[24px] self-stretch inline-flex flex-col justify-start items-start gap-12">
          <div className="inline-flex justify-start items-start gap-16">
            <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
              다크모드 설정
            </div>
            <div className="rounded-lg flex justify-start items-center">
              <button
                onClick={handleToggle}
                className="cursor-pointer px-12 py-4 bg-white rounded-tl-lg rounded-bl-lg flex justify-center items-center gap-2"
              >
                <div className="w-6 h-6" />
                <img src={sunIcon} alt="라이트 모드 아이콘" />
                <div className="justify-start text-neutral-800 text-base font-semibold font-['Pretendard'] leading-6">
                  Light
                </div>
                {isLight ? (
                  <img src={checkIcon} alt="라이트 모드 선택" />
                ) : (
                  <div className="w-6 h-6 relative overflow-hidden" />
                )}
              </button>
              <button
                onClick={handleToggle}
                className="cursor-pointer px-12 py-4 bg-neutral-800 rounded-tr-lg rounded-br-lg flex justify-center items-center gap-2"
              >
                <div className="w-6 h-6" />
                <img src={moonIcon} alt="다크 모드 아이콘" />
                <div className="justify-start text-white text-base font-semibold font-['Pretendard'] leading-6">
                  Dark
                </div>
                {!isLight ? (
                  <img src={checkIcon} alt="라이트 모드 선택" />
                ) : (
                  <div className="w-6 h-6 relative overflow-hidden" />
                )}
              </button>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-14">
            <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
              전체 내역 삭제
            </div>
            <div className="w-60 pl-7 pr-8 py-4 bg-white rounded-lg flex justify-center items-center gap-2">
              <img src={trashBinIcon} alt="쓰레기통 아이콘" />
              <div className="justify-start text-red-500 text-lg font-semibold font-['Pretendard'] leading-7">
                전체 내역 삭제하기
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start">
            <div className="justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
              카테고리 설정
            </div>
            <div className="pl-[64px] w-[960px] inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <SettingCategory
                  title="월급"
                  icon={bagIcon}
                  alt="식비 아이콘"
                  className="border-[#6DD0E4]"
                />
                <SettingCategory
                  title="용돈"
                  icon={moneyBagIcon}
                  alt="용돈 아이콘"
                  className="border-[#E6DC54]"
                />
                <SettingCategory
                  title="식비"
                  icon={foodIcon}
                  alt="식비 아이콘"
                  className="border-[#F2A44B]"
                />
                <SettingCategory
                  title="커피"
                  icon={coffeeIcon}
                  alt="커피 아이콘"
                  className="border-[#8F5A15]"
                />
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <SettingCategory
                  title="생활용품"
                  icon={toiletPaperIcon}
                  alt="생활용품 아이콘"
                  className="border-[#B592E9]"
                />
                <SettingCategory
                  title="공과금"
                  icon={tabletCardIcon}
                  alt="공과금 아이콘"
                  className="border-[#74E4BB]"
                />
                <SettingCategory
                  title="이체/인출"
                  icon={foodIcon}
                  alt="이체/인출 아이콘"
                  className="border-[#E898D7]"
                />
                <SettingCategory
                  title="유흥"
                  icon={alcholIcon}
                  alt="유흥 아이콘"
                  className="border-[#C5424B]"
                />
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <SettingCategory
                  title="금융"
                  icon={moneyIcon}
                  alt="금융 아이콘"
                  className="border-[#42C563]"
                />
                <SettingCategory
                  title="교통/차량"
                  icon={carIcon}
                  alt="교통/차량 아이콘"
                  className="border-[#4274C5]"
                />
                <SettingCategory
                  title="기타"
                  icon={menuIcon}
                  alt="기타 아이콘"
                  className="border-[#A9ACB2]"
                />

                <div className="w-60 h-20 px-7 py-6 bg-white rounded-lg inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-8 h-8 relative">
                    <div className="w-8 h-8 left-0 top-0 absolute" />
                    <img src={plusIcon} alt="플러스 아이콘" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
