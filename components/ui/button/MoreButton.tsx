// components/ui/button/MoreLinkButton.tsx

import Link from "next/link"
import classNames from "classnames"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const MoreLinkButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
  children = "View more", // デフォルトのテキスト
  icon = "/sns/line.svg", // デフォルトのアイコン
  variant = "default", // デフォルトのバリアント
  showArrow = true, // デフォルトで矢印を表示
}: {
  href?: string
  className?: string
  children?: React.ReactNode
  icon?: string
  variant?: "default" | "green" | "blue"
  showArrow?: boolean
}) => {
  // バリアントに基づくテキストカラーを決定
  const getTextColor = () => {
    switch (variant) {
      case "green":
        return "text-accentGreen"
      case "blue":
        return "text-accentColor"
      default:
        return "text-white"
    }
  }

  // バリアントに基づく矢印の背景色を決定
  const getArrowBgColor = () => {
    switch (variant) {
      case "green":
        return "bg-accentGreen"
      case "blue":
        return "bg-accentColor"
      default:
        return "bg-accentGreen"
    }
  }
  return (
    <Link
      href={href}
      className={classNames(
        "bg-white border-white font-en tracking-[0.03em] cursor-pointer flex items-center justify-between w-full md:w-[300px] px-6 py-4 relative group rounded-full",
        getTextColor(),
        className
      )}
    >
      {/* アイコン */}
      <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-3">
        <Image
          src={icon}
          alt="icon"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      <span>{children}</span>
      {/* 右矢印 */}
      <div className=" w-6 h-6">
        
        {showArrow && (
          <div
            className={classNames(
              "text-white rounded-full flex justify-center items-center h-full",
              getArrowBgColor()
            )}
          >
            <ArrowRight className="w-3 h-3" />
          </div>
        )}
      </div>
    </Link>
  )
}

export default MoreLinkButton
