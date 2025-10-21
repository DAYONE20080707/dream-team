// components/ui/itemCard/StrengthCard_02.tsx
import Image from "next/image"
import Link from "next/link"

interface StrengthCardProps {
  number: string
  title: string
  description: string
  image: string
}

const StrengthCard = ({
  number,
  title,
  description,
  image,
}: StrengthCardProps) => {
  return (
    <div className="bg-white flex gap-12 p-6 rounded-[10px]">
      {/* 左側：画像 */}
      <div className="flex-shrink-0 w-[45%] h-full">
        <div className="relative w-full h-full">
          <Image
            fill
            src={image}
            alt={title}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 右側：テキスト */}
      <div className="flex-1">
        <h3 className="text-accentColor font-bold text-[28px]">{title}</h3>
        <div className="text-gray-700 text-xl leading-[200%] mt-2">
          {description}
        </div>
      </div>
    </div>
  )
}

export default StrengthCard
