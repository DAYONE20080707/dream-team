// components/module/cta/Cta_03.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"
import SectionContent from "../../frame/SectionContent"
import MoreLinkButton from "../../button/MoreButton"

const Cta_03 = () => {
  return (
    <>
      <SectionContent className="!py-0 !px-0 ">
        <section className="mx-auto grid md:grid-cols-2 rounded-t-[40px] overflow-hidden">
          <div className="text-white text-center bg-accentGreen py-10 md:py-16 px-5">
            <p className="md:text-lg font-semibold mb-1">資料請求</p>
            <h4 className="text-3xl md:text-[40px] font-en leading-[120%] font-bold">
              Download
            </h4>
            <p className="md:text-lg my-3 md:my-6 leading-[160%]">
              もっと詳しい情報を知りたい方はこちらから資料ダウンロード
            </p>
            <div className="flex justify-center">
              <MoreLinkButton
                href="#service"
                className=""
                icon="/sns/line.svg"
                variant="green"
              />
            </div>
          </div>
          <div className="bg-accentYellow text-accentColor text-center py-10 md:py-16 px-5 ">
            <p className="md:text-lg font-semibold mb-1">個別相談</p>
            <h4 className="text-3xl md:text-[40px] font-en leading-[120%] font-bold">
              Contact us
            </h4>
            <p className="md:text-lg my-3 md:my-6 leading-[160%]">
              詳しくサービス内容をご説明いたします
            </p>
            <div className="flex justify-center">
              <MoreLinkButton
                href="/contact"
                className=""
                icon="/sns/tel.svg"
                variant="blue"
                showArrow={false}
              >
                00-0000-0000
              </MoreLinkButton>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Cta_03
