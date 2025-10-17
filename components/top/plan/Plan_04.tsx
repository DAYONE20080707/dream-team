// components/plan/Plan_04.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanCard_04 from "@/components/ui/ItemCard/PlanCard_04"
import PlanList from "@/components/ui/ItemCard/PlanList_04"
import SectionContent from "@/components/ui/frame/SectionContent"

const Plan_04 = () => {
  return (
    <SectionContent className="bg-bgLight">
      <section className="md:max-w-[1200px] mx-auto">
        <ContentHeadline
          subTitle="Plan"
          mainTitle="料金プラン"
          subTitleClassName=""
          titleClassName=""
        />
        <PlanList />
      </section>
      <PlanOption />
    </SectionContent>
  )
}

export default Plan_04
