import trashBinGray from "../assets/icons/trashBinGray.svg";

interface CategoryProps {
  icon: string;
  title: string;
  alt: string;
  className: string;
}

export default function SettingCategory({
  icon,
  title,
  alt,
  className,
}: CategoryProps) {
  return (
    <div
      className={`w-60 px-7 py-6 bg-white rounded-lg border  ${className} inline-flex flex-col justify-start items-start gap-2.5`}
    >
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <img src={icon} alt={alt} />
          <div className="justify-start text-zinc-700 text-lg font-semibold font-['Pretendard'] leading-7">
            {title}
          </div>
        </div>
        <div className="w-6 h-6" />
        <img src={trashBinGray} alt="휴지통" />
      </div>
    </div>
  );
}
