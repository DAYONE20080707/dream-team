"use client"

import Image from "next/image"
import Link from "next/link"

const FixedLineButton = () => {
  return (
    <Link
      href="https://line.me/R/ti/p/@dream-team"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-[20%] md:top-[30%] right-0 z-50 flex flex-col items-center justify-center gap-2 bg-accentYellow px-2 md:px-3 py-4 md:py-5 shadow-[0_0_24.583px_0_rgba(0,0,0,0.10)] md:bottom-16 md:right-0 h-fit"
    >
      {/* LINEアイコン */}
      <div className="flex items-center justify-center">
        <Image
          src="/sns/line.svg"
          alt="LINE"
          width={40}
          height={40}
          className="h-8 w-8"
        />
      </div>

      {/* 縦書きテキスト */}
      <div
        className="font-bold text-accentColor text-lg md:text-[22px] tracking-[0.1em]"
        style={{ writingMode: "vertical-rl" }}
      >
        役立つ教育情報発信中
      </div>
    </Link>
  )
}

export default FixedLineButton
