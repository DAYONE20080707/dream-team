import Link from "next/link"
import Image from "next/image"

const ContactButton = ({
  className = "",
  children = "Contact us", // デフォルトのテキスト
}: {
  className?: string
  children?: React.ReactNode
}) => {
  // テキストが英語の場合はfont-en、日本語の場合はfont-enを使わない
  const isEnglish = children === "Contact us"

  return (
    <Link
      href="/contact"
      className={`bg-accentGreen text-white cursor-pointer flex items-center justify-center w-full px-10 py-4 rounded-[10px] ${
        isEnglish
          ? "font-en text-lg tracking-[0.03em]"
          : " text-base tracking-[0.05em]"
      } ${className}`}
    >
      <Image
        src="/sns/line.svg"
        alt="LINE"
        width={30}
        height={30}
        className="mr-1"
      />
      {children}
    </Link>
  )
}

export default ContactButton
