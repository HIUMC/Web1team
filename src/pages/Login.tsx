import { Header } from "../components/layout/Header";
import MainIcon from "../assets/main_icon.svg";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[228px] h-dvh">
        <div className="flex items-center gap-[22px]">
          <img src={MainIcon} alt="메인 아이콘" className="size-[69px]" />
          <span className="text-indigo-500 text-6xl font-semibold leading-none">
            Pocket safe
          </span>
        </div>
        <div className="pt-[69px] flex flex-col gap-[21px] ">
          <input
            placeholder="닉네임"
            className=" w-[480px] h-[54px] bg-zinc-300 rounded-[10px] pl-[20px] text-2xl font-medium text-black placeholder:text-2xl placeholder:font-medium placeholder:text-gray-500 placeholder:opacity-80 focus:outline-none"
          />
          <input
            placeholder="비밀번호(6자리)"
            className=" w-[480px] h-[54px] bg-zinc-300 rounded-[10px] pl-[20px] text-2xl font-medium text-black placeholder:text-2xl placeholder:font-medium placeholder:text-gray-500 placeholder:opacity-80 focus:outline-none"
          />
        </div>
        <div className="pt-[69px]">
          <button
            className="w-[480px] h-14 p-2.5 bg-indigo-500 rounded-[100px] inline-flex justify-center items-center cursor-pointer"
            type="submit"
          >
            <div
              className="opacity-80 text-right justify-center text-white text-xl font-semibold "
              style={{ fontFamily: "Pretendard Variable" }}
            >
              로그인
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
