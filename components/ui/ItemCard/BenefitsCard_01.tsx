// components/ui/itemCard/BenefitsCard.tsx
import Image from "next/image"
import classNames from "classnames"
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton"

interface BenefitsCardProps {
  id: number
  title: string
  attention?: string
  image: string // 画像パスを受け取る
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
  showButton?: boolean // ボタンの表示を制御するプロパティを追加
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  id,
  title,
  attention,
  image,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-[10px] overflow-hidden p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.10)] space-y-4",
        className
      )}
    >
      {/* テキスト */}
      <div className="bg-accentColor text-accentYellow font-bold text-lg md:text-2xl md:text-[29px] text-center p-2 whitespace-pre-line text-center">
        {title}
        <br />
        <span className="text-sm md:text-base">{attention}</span>
       
      </div>
      {/* 画像 */}
      <div className="relative h-[352px] w-full">
        <Image
          fill
          src={image}
          alt={`solution ${id}`}
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default BenefitsCard
