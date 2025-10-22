// components/ui/ItemCard/PlanCard_02.tsx
import Link from "next/link"

interface PlanCardProps {
  title?: string
  description?: string
  price?: string
  features: string[] // 機能項目の配列
  isLargePadding?: boolean // 新しいプロパティ
  isAccent?: boolean // accentカラー用のプロパティ
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  features,
  isLargePadding = false, // デフォルトはfalse
  isAccent = false, // デフォルトはfalse
}) => {
  // 一番左の列（タイトルなし）の場合は特別なスタイルを適用
  const isFirstColumn = !title

  return (
    <div className={isFirstColumn ? "w-[160px]" : ""}>
      {/* プランの概要部分 */}
      <div
        className={`${
          isFirstColumn ? "" : isAccent ? "" : "bg-[#7F7F7F]"
        } h-[110px] text-white p-6 ${
          isFirstColumn ? "rounded-tl-2xl" : "rounded-t-2xl"
        } flex flex-col items-center justify-center text-center ${
          isLargePadding ? "py-[110px] md:py-[123px]" : ""
        }`}
        style={{
          background:
            isAccent && !isFirstColumn
              ? "linear-gradient(90deg, #91C4FF 0%, #4394F2 18.13%, #0563D2 65.92%)"
              : undefined,
        }}
      >
        <h3 className="text-lg md:text-2xl font-bold leading-[160%]">
          {title}
        </h3>

        {/* descriptionがある場合のみ表示 */}
        {description && <p className="font-light">{description}</p>}

        {/* priceがある場合のみ表示 */}
        {price && (
          <p className="my-4 text-[30px] md:text-[40px] font-bold">
            <span className="text-lg font-extrabold">￥</span>
            {price}
          </p>
        )}

        {/* priceがある場合のみ"申し込む"ボタンを表示 */}
        {price && (
          <Link
            href="/"
            className="w-full h-12 mdh-[58px] text-accentColor py-4 bg-white rounded-[30px] justify-center items-start font-semibold"
          >
            申し込む
          </Link>
        )}
      </div>

      {/* 各機能項目を表示 */}
      {features.map((feature, index) => (
        <p
          key={index}
          className={`mt-[2px] h-[156px] flex items-center justify-center ${
            isFirstColumn
              ? "bg-[#8D8D8D] text-white text-xl"
              : isAccent
              ? "bg-accentYellow text-accentColor text-[35px]"
              : "bg-white text-[#393939] text-[35px]"
          } border-b border-[#8D8D8D] p-7 text-center font-bold`}
        >
          {feature}
        </p>
      ))}
    </div>
  )
}

export default PlanCard
