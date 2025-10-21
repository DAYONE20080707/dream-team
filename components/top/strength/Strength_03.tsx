// components/strength/Strength_03.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import StrengthCard from "@/components/ui/ItemCard/StrengthCard_03"
import { structureData } from "@/data/top/StructureData"
import MoreLinkButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

// 強み
const Strength_03 = () => {
  return (
    <>
      <SectionContent variant="gradient" id="structure">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="md:max-w-[1280px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Structure"
            mainTitle="テスト対策の仕組み"
            className="text-center text-white"
          />

          {/* gridレイアウトを使用して3列にカードを配置 */}
          <div className="grid grid-cols-3 gap-10">
            {/* structureDataをループしてStrengthCardを生成 */}
            {structureData.map((strength) => (
              <StrengthCard
                key={strength.number}
                number={strength.number}
                title={strength.title}
                description={strength.description}
                image={strength.image}
                bannerText={strength.bannerText}
              />
            ))}
          </div>
        </section>
        {/* <MoreLinkButton
          href="/"
          className="mt-16 text-accentColor border-accentColor mx-auto"
        /> */}
      </SectionContent>
    </>
  )
}

export default Strength_03
