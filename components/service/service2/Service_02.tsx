// components/message/Service_02.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import ServiceSection_02 from "@/components/ui/module/ServiceSection_02"

// メッセージ
const Service_02 = () => {
  return (
    <>
      <SectionContent className="![padding-top:64px] ![padding-bottom:64px]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1280px] mx-auto">
          {/* <ContentHeadline
            subTitle="Feature 01"
            mainTitle="サービスの特徴1"
            subTitleClassName="text-center"
            titleClassName="text-center"
          /> */}
          <ServiceSection_02
            enTitle="Feature 01"
            jaTitle="サービスの特徴1"
            headingText="見出しテキストはいります見出しテキストはいります見出しテキストはいります見出しテキストはいります見出しテキストはいります"
            description={`テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。す。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。テキストはいります。`}
            buttonHref="/about"
            // imageUrl="/path/to/image.jpg"
          />
        </section>
      </SectionContent>
    </>
  )
}

export default Service_02
