// components/ui/ItemCard/FeatureCard.tsx
import classNames from "classnames"

interface FeatureCardProps {
  icon: React.ReactNode
  textLine1: string
  textLine2: string
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  textLine1,
  textLine2,
  className = "",
}) => {
  return (
    <div
      className={classNames(
        "bg-accentYellow rounded-lg flex flex-col items-center justify-end text-center w-[217px] p-3",
        className
      )}
    >
      {/* アイコン */}
      <div className="mb-4 flex justify-center">{icon}</div>

      {/* テキスト行1 */}
      <p className="text-black text-sm font-bold">{textLine1}</p>

      {/* テキスト行2 */}
      <p className="text-accentColor text-2xl font-bold">{textLine2}</p>
    </div>
  )
}

export default FeatureCard
