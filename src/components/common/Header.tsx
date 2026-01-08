export const Header = () => {
    return (
        <header className="gap-[12px]">
            <div className="flex flex-row px-[48px] py-[12px] items-center gap-[12px]">
                <img src="src\assets\main_icon.svg"/>
                <div
                    className="font-semibold text-[28px] leading-[150%] tracking-[-0.56px]"
                    style={{ color: 'var(--Color-main, #4F5BFF)' }}
                >
                    Pocket safe
                </div>
            </div>
        </header>
    )
}