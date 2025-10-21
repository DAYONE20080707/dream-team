// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image"
import classNames from "classnames"
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton"

interface ServiceCardProps {
  id: number
  subTitle: string
  title: string
  description: string
  image: string // 画像パスを受け取る
  href: string // リンク先のURLを受け取る
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
  showButton?: boolean // ボタンの表示を制御するプロパティを追加
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  return (
    <div
      className={classNames(
        "bg-white border border-blue-200 rounded-[10px] overflow-hidden p-6",
        className
      )}
    >
      {/* 上部：画像 */}
      <div className="relative h-[352px] w-full">
        <Image
          fill
          src={image}
          alt={`solution ${id}`}
          className="object-cover rounded-[10px]"
          priority
        />
      </div>

      {/* 下部：テキスト */}
      <div className="mt-5">
        <div className="text-accentColor font-bold text-2xl text-center pb-2 border-b border-accentColor">
          {title}
        </div>
        <div className="mt-5 text-base leading-[200%]">
          {description}
        </div>
        {showButton && (
          <div className="pt-2">
            <ArrowRightLinkButton href={href} label="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
