// components/benefits/Benefits_01.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import BenefitsCard from "@/components/ui/ItemCard/BenefitsCard_01"
import { benefitsData } from "@/data/top/BenefitsData"
import SectionContent from "@/components/ui/frame/SectionContent"

const Benefits_01 = () => {
  // 表示するサービス数をbenefitsDataのIDを指定して表示
  const benefitsIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const benefitsToDisplay = benefitsData.filter((benefits) =>
    benefitsIdsToDisplay.includes(benefits.id)
  )

  return (
    <>
      <SectionContent variant="cream" id="course">
        <section className="md:max-w-[1280px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Benefits"
            mainTitle="特典案内"
            className="text-accentColor"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {benefitsToDisplay.map((benefits) => (
              <BenefitsCard
                key={benefits.id}
                id={benefits.id}
                title={benefits.title}
                attention={benefits.attention}
                image={benefits.image} // 画像パスを渡す
                className=""
              />
            ))}
          </div>
        </section>
        
      </SectionContent>
    </>
  )
}

export default Benefits_01
