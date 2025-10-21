// components/strength/Strength_01.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ResultCard from "@/components/ui/ItemCard/ResultCard"
import { resultsData } from "@/data/top/ResultsData"
import MoreLinkButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"
import ContentHeadlineReverse from "@/components/ui/frame/ContentHeadlineReverse"
import Image from "next/image"

// 強み
const Strength_01 = () => {
  return (
    <>
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className="md:max-w-[1280px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Results"
            mainTitle="点数アップ実績"
            className="text-center text-accentColor"
          />

          {/* 2x3グリッドレイアウトでResultCardを配置 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16">
            {resultsData.map((result, index) => (
              <ResultCard
                key={`${result.name}-${index}`}
                name={result.name}
                result={result.result}
                image={result.image}
              />
            ))}
          </div>
        </section>
        {/* <div className="mt-16 flex justify-center">
          <MoreLinkButton href="/" variant="accent">
            Follow us
          </MoreLinkButton>
        </div> */}
      </SectionContent>
    </>
  )
}

export default Strength_01
