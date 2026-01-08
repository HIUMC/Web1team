import Donut from "../components/Donut";
import DropDown from "../components/DropDown";

export default function MonthlyStats() {
  return (
    <>
      <div className="h-dvh w-full bg-gray-100">
        <div className="w-[1109px] pt-[32px] p-[24px]">
          <div className="h-[62px] px-[24px] flex gap-[30px] items-center overflow-visible">
            <div className="justify-start text-neutral-800 text-2xl font-semibold font-['Pretendard'] leading-9">
              월별 통계
            </div>
            <DropDown />
          </div>
          <div className="flex gap-[16px] pt-[16px]">
            <div className="w-[688px] h-[487px] px-6 py-4 bg-white rounded-lg inline-flex flex-col justify-start items-center gap-16">
              <div className="self-stretch justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
                분류별 지출
              </div>
              <div className="flex gap-[64px]">
                <div className="relative w-[260px] h-[260px] flex">
                  <div className="">
                    <Donut finance={999999999} food={99999999999} />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-gray-500 text-sm">
                        최대지출 카테고리
                      </div>
                      <div className="text-neutral-800 text-xl font-semibold pt-[16px]">
                        식비
                      </div>
                      <div className="text-gray-500 text-sm pt-[4px]">
                        99,999,999,999 원
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 inline-flex flex-col justify-center items-center gap-6">
                  <div className="self-stretch h-6 inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-5 h-5 bg-orange-400 rounded-full" />
                      <div className="text-center justify-start text-gray-500 text-base font-semibold font-['Pretendard'] leading-6">
                        식비
                      </div>
                    </div>
                    <div className="w-44 flex justify-end items-center gap-1">
                      <div className="text-right justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                        99,999,999,999
                      </div>
                      <div className="text-center justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                        원
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-6 inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full" />
                      <div className="text-center justify-start text-gray-500 text-base font-semibold font-['Pretendard'] leading-6">
                        금융
                      </div>
                    </div>
                    <div className="w-44 flex justify-end items-center gap-1">
                      <div className="text-right justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                        999,999,999
                      </div>
                      <div className="text-center justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                        원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[453px] h-[487px] pb-[16px] bg-white rounded-lg inline-flex flex-col justify-start items-center">
              <div className="self-stretch p-6 border-b border-gray-200 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
                  총 수입
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-indigo-500 text-xl font-semibold font-['Pretendard'] leading-8">
                      199,999,999,999
                    </div>
                    <div className="justify-start text-indigo-500 text-xl font-semibold font-['Pretendard'] leading-8">
                      원
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-6 inline-flex justify-between items-center">
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-center justify-start text-gray-500 text-base font-semibold font-['Pretendard'] leading-6">
                          월급
                        </div>
                      </div>
                      <div className="w-44 flex justify-end items-center gap-1">
                        <div className="text-right justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          99,999,999,999
                        </div>
                        <div className="text-center justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          원
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-6 inline-flex justify-between items-center">
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-center justify-start text-gray-500 text-base font-semibold font-['Pretendard'] leading-6">
                          용돈
                        </div>
                      </div>
                      <div className="w-44 flex justify-end items-center gap-1">
                        <div className="text-right justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          99,999,999,999
                        </div>
                        <div className="text-center justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          원
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-6 border-b border-gray-200 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-neutral-800 text-xl font-normal font-['Pretendard'] leading-8">
                  총 지출
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-red-500 text-xl font-semibold font-['Pretendard'] leading-8">
                      100,999,999,998
                    </div>
                    <div className="justify-start text-red-500 text-xl font-semibold font-['Pretendard'] leading-8">
                      원
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-6 inline-flex justify-between items-center">
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-center justify-start text-gray-500 text-base font-semibold font-['Pretendard'] leading-6">
                          월급
                        </div>
                      </div>
                      <div className="w-44 flex justify-end items-center gap-1">
                        <div className="text-right justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          99,999,999,999
                        </div>
                        <div className="text-center justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          원
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-6 inline-flex justify-between items-center">
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-center justify-start text-gray-500 text-base font-semibold font-['Pretendard'] leading-6">
                          용돈
                        </div>
                      </div>
                      <div className="w-44 flex justify-end items-center gap-1">
                        <div className="text-right justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          99,999,999,999
                        </div>
                        <div className="text-center justify-start text-gray-500 text-base font-normal font-['Pretendard'] leading-6">
                          원
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-6 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-neutral-800 text-xl font-semibold font-['Pretendard'] leading-8">
                  이번 달 남은 예산
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="justify-start text-indigo-500 text-xl font-semibold font-['Pretendard'] leading-8">
                    99,000,000,000
                  </div>
                  <div className="justify-start text-indigo-500 text-xl font-semibold font-['Pretendard'] leading-8">
                    원
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
