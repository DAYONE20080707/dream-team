// components/ui/frame/SectionContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface SectionContentProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: "default" | "dot" | "light" | "gradient" | "cream" | "yellow"
  id?: string
}

const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
  style,
  variant = "default",
  id,
}) => {
  // バリアントに基づく背景スタイルを決定
  const getVariantStyle = () => {
    if (variant === "dot") {
      return {
        backgroundColor: "#1b1b1b",
        backgroundImage:
          "radial-gradient(circle, #ffffff0d 1.5px, transparent 1.5px), radial-gradient(circle, #ffffff0d 1.5px, transparent 1.5px)",
        backgroundPosition: "0 0, 5px 10px",
        backgroundSize: "10px 20px",
        ...style,
      }
    }
    if (variant === "light") {
      return {
        backgroundColor: "#f7fcff",
        ...style,
      }
    }
    if (variant === "gradient") {
      return {
        background:
          "linear-gradient(90deg, #91C4FF 0%, #4394F2 18.13%, #0563D2 65.92%)",
        ...style,
      }
    }
    if (variant === "cream") {
      return {
        backgroundColor: "#FFFCEA",
        ...style,
      }
    }
    if (variant === "yellow") {
      return {
        backgroundColor: "#FFF200",
        ...style,
      }
    }
    return style
  }

  return (
    <div
      id={id}
      className={classNames(
        "mx-auto py-16 md:py-[120px] px-4 md:px-5",
        className
      )}
      style={getVariantStyle()}
    >
      {children}
    </div>
  )
}

export default SectionContent
