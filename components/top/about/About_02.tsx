// components/message/About_02.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_02"

// メッセージ
const About_02 = () => {
  return (
    <>
      <SectionContent className="">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" max-w-[1280px] mx-auto ">
          <div className="relative pt-40">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[213px] font-black font-en text-bgBlue whitespace-nowrap leading-[100%]">
              What We Can Do
            </span>
            <h2 className="relative mx-auto w-fit text-center text-accentColor text-[31px] font-bold pb-2 border-b-2 border-accentColor">
              私たちのサービスでできること
            </h2>
          </div>
          <div className="mt-24">
            <AboutSection
              title="無数の選択肢の中から\nベストな選択を"
              description={`経営者は日々悩んでいます。そして、日々決断しています。

一番成果が上がる選択はどれか。一番効率のいい選択はどれか。
無数の選択肢の中からベストな選択ができるよう、
常に試行錯誤し決断しています。

私たちはその決断が本当にベストなのか、検討しています。
そして、その決断が本当のベストになるためのサポートを
常に用意しています。`}
              buttonHref="/about"
            />
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default About_02
