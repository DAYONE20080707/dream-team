// components/plan/Plan_03.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_03"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_03"

const Plan_03 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="md:max-w-[1280px] mx-auto">
          <ContentHeadline
            subTitle="Plan"
            mainTitle="料金プラン"
            subTitleClassName=""
            titleClassName=""
          />
          <PlanList />

          <div className="flex justify-center mt-10 md:mt-16">
            <Link
              href="/"
              className="bg-accentColor text-white cursor-pointer rounded-full flex items-center justify-center w-[350px] h-12 md:h-[58px] font-semibold"
            >
              申し込む
            </Link>
          </div>
        </section>
        <PlanOption />
      </SectionContent>
    </>
  )
}

export default Plan_03
