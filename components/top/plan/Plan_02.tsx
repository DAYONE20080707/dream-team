// components/plan/Plan_02.tsx
import PlanCard from "@/components/ui/ItemCard/PlanCard_02"
import PlanOption from "@/components/ui/module/PlanOption"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PlanList from "@/components/ui/ItemCard/PlanList_02"
import SectionContent from "@/components/ui/frame/SectionContent"

const Plan_02 = () => {
  return (
    <SectionContent>
      <section className="w-full md:max-w-[1280px] mx-auto overflow-hidden">
        <ContentHeadline
          subTitle="Price"
          mainTitle="料金比較"
          className="text-center text-accentColor"
          subTitleClassName=""
          titleClassName=""
        />
        <h3 className="text-accentColor text-2xl md:text-[48px] font-bold text-center leading-[160%]">高品質の指導を、他塾より通いやすい料金で。</h3>
        <p className="mt-6 text-base md:text-xl font-bold text-center">質の高い個別指導を、通いやすい価格でご提供しています。<br />
        『この料金でここまでやってくれるの？』と、多くの保護者の方から驚きと喜びの声をいただいています。</p>
        <PlanList />
      </section>
      {/* <PlanOption /> */}
    </SectionContent>
  )
}

export default Plan_02
