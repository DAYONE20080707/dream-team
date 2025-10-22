// components/ui/module/FeatureCards.tsx
import FeatureCard from "@/components/ui/ItemCard/FeatureCard"
import Image from "next/image"

const FeatureCards = () => {
  return (
    <div className="flex gap-2 md:gap-5 ">
      {/* 左のカード - 定期テスト対策 */}
      <FeatureCard
        icon={
          <Image
            src="/top/kv/kv_icon1.svg"
            alt="定期テスト対策"
            width={51}
            height={51}
            className="w-12 h-12"
          />
        }
        textLine1="定期テスト対策で"
        textLine2="点数アップ"
      />

      {/* 中央のカード - 勉強習慣 */}
      <FeatureCard
        icon={
          <Image
            src="/top/kv/kv_icon2.svg"
            alt="勉強習慣"
            width={39}
            height={59}
            className="w-[39px] h-[59px]"
          />
        }
        textLine1="徹底サポートで身につく"
        textLine2="勉強習慣"
      />

      {/* 右のカード - 受験対策 */}
      <FeatureCard
        icon={
          <Image
            src="/top/kv/kv_icon3.svg"
            alt="受験対策"
            width={73}
            height={51}
            className="w-[73px] h-12"
          />
        }
        textLine1="志望校合格に直結する"
        textLine2="受験対策"
      />
    </div>
  )
}

export default FeatureCards
