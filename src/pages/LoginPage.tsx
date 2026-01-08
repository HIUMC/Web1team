import { Header } from "../components/common/Header";
import MainIcon from "../assets/main_icon.svg";
import { useNavigate } from "react-router-dom";
import { validateSignin, type UserSigninInformation } from "../utils/validate";
import useForm from "../hooks/useForm";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login, isLogin } = useAuth();

    const {values, errors, touched, getInputProps} = useForm<UserSigninInformation>({
        initialValue: {
            nickname: "",
            password: "",
        },
        validate: validateSignin
    });

    const handleSubmit = () => {
        login({ nickname: values.nickname });
        navigate("/");
    };

    const isDisabled =
        Object.values(errors || {}).some(error => error.length > 0) ||
        Object.values(values).some(value => value === "")
    
    useEffect(() => {
        if (isLogin) {
            navigate("/");
        }
    }, [isLogin]);

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
            {...getInputProps("nickname")}
            type={"nickname"}
            placeholder="닉네임"
            className=" w-[480px] h-[54px] bg-zinc-300 rounded-[10px] pl-[20px] text-2xl font-medium text-black placeholder:text-2xl placeholder:font-medium placeholder:text-gray-500 placeholder:opacity-80 focus:outline-none"
          />
          <input
            {...getInputProps("password")}
            type={"password"}
            placeholder="비밀번호(6자리)"
            className=" w-[480px] h-[54px] bg-zinc-300 rounded-[10px] pl-[20px] text-2xl font-medium text-black placeholder:text-2xl placeholder:font-medium placeholder:text-gray-500 placeholder:opacity-80 focus:outline-none"
          />
        </div>
        <div className="pt-[69px]">
            <button
                type="button"
                onClick={handleSubmit}
                disabled={isDisabled}
                className={`w-[480px] h-14 p-2.5 rounded-[100px] flex justify-center items-center text-white text-xl font-semibold transition bg-indigo-500
                    ${isDisabled ? "cursor-not-allowed":" hover:bg-indigo-600 cursor-pointer"}`
                }
                style={{ fontFamily: "Pretendard Variable" }}
            >
            <span className={isDisabled ? "text-white opacity-80" : "text-white"}>
                로그인
            </span>
            </button>
        </div>

      </div>
    </>
  );
}
