export const Footer = () => {
    return (
        <footer className="flex flex-row justify-center items-center gap-[72px]">
            <p
                className="text-[20px] font-normal leading-[150%] tracking-[-0.4px]"
                style={{ color: 'var(--Grayscale-600, #666B76)' }}
            >
                앱에 대한 문의: UMC@example.com
            </p>
            <p
                className="text-[20px] font-normal leading-[150%] tracking-[-0.4px]"
                style={{ color: 'var(--Grayscale-600, #666B76)' }}
            >
                개인정보 보호정책
            </p>
            <p
                className="text-[20px] font-normal leading-[150%] tracking-[-0.4px]"
                style={{ color: 'var(--Grayscale-600, #666B76)' }}
            >
                이용 약관
            </p>
        </footer>
    )
}