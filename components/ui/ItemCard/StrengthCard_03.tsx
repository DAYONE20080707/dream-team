// components/ui/itemCard/StrengthCard_03.tsx
import Image from "next/image"
import Link from "next/link"

interface StrengthCardProps {
  number: string
  title: string
  description: string
  image: string
  bannerText: string
}

const StrengthCard = ({
  number,
  title,
  description,
  image,
  bannerText,
}: StrengthCardProps) => {
  return (
    <div className="p-6 bg-white border border-blue-200 rounded-[20px] overflow-hidden">
      {/* 上部の番号と線 */}
      <div className="text-center">
        <div className="text-accentColor text-[42px] font-bold font-roboto mb-2">
          {number}
        </div>
        <div className="w-12 h-0.5 bg-accentColor mx-auto"></div>
      </div>

      {/* 黄色のバナー */}
      <div className="bg-accentYellow mt-6">
        <div className="text-center py-2">
          <span className="text-blue-900 font-bold text-2xl">{bannerText}</span>
        </div>
      </div>

      {/* 画像部分 */}
      <div className="relative w-full h-[250px] mt-4">
        <Image fill src={image} alt={title} className="object-cover" priority />
      </div>

      {/* 下部のテキスト部分 */}
      <h3 className="text-accentColor text-xl font-bold mt-6 text-center">
        {title}
      </h3>
      <p className="text-base leading-relaxed mt-2">{description}</p>
    </div>
  )
}

export default StrengthCard
