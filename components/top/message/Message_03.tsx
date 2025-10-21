// components/message/Message_03.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"

// メッセージ
const Message_03 = () => {
  return (
    <>
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1280px] mx-auto ">
          {/* <ContentHeadline subTitle="Who we are" mainTitle="私たちについて" /> */}
          <div className="mt-16 flex justify-start space-x-20 items-stretch">
            <div className="w-[600px]">
              <h3 className="text-accentColor text-5xl font-bold leading-[160%]">
                勉強に自信を、
                <br />
                子どもに笑顔を。
              </h3>
              <p className="mt-16 leading-[250%] text-base">
                私たちは、「子どもたちを元気な笑顔にする」という教育理念をもとに、１中学校区専門塾の地域密着で、大阪府・京都府・兵庫県・滋賀県・福岡県に約70校舎展開し、これまでに３万人以上の子どもたちに向き合ってきました。
                <br />
                勉強に自信をなくしている子、勉強のやり方がわからない子、勉強のやる気がない子、ぜひ私たちにお任せください！どんな子どもたちとも真正面から向き合い、寄り添って対応していきます。
              </p>
              <MoreLinkButton href="/" />
            </div>
            <div className="w-[520px] flex-1 relative">
              <Image
                src="/top/message/message.png"
                alt="message"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Message_03
