// components/ui/module/CtaCard.tsx
import Link from "next/link"
import Image from "next/image"
import { CircleArrowDown } from "lucide-react"

const CtaCard = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-[20px] py-8 px-5 md:px-20 flex flex-col md:flex-row gap-5 items-center justify-between mx-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] max-w-[1280px] w-[90%] md:w-full z-[5]">
      {/* 左側のテキスト部分 */}
      <div className="flex flex-col relative items-center gap-4">
        <div className="flex items-center">
          <Image
            src="/top/kv/kv_deco.png"
            alt="左の装飾"
            width={20}
            height={27}
            className="w-5 h-5 object-contain"
          />
          <p className="text-accentRed  font-bold text-lg md:text-xl">
            お悩みやお気軽にご相談ください
          </p>
          <Image
            src="/top/kv/kv_deco.png"
            alt="右の装飾"
            width={20}
            height={27}
            className="w-5 h-5 scale-x-[-1] object-contain"
          />
        </div>
        <p className="text-black text-3xl md:text-[40px] font-bold">
        入塾説明・体験授業受付中！!
        </p>
      </div>

      {/* 右側のボタン部分 */}
      <Link
        href="/#contact"
        className="w-full bg-accentGreen text-white px-6 py-5 rounded-full flex items-center justify-center gap-2 max-w-[508px]"
      >
        <span className="text-lg md:text-[26px] font-semibold whitespace-nowrap">
          お問い合わせはこちら
        </span>
        <CircleArrowDown className="w-6 h-6 text-white" />
      </Link>
    </div>
  )
}

export default CtaCard
