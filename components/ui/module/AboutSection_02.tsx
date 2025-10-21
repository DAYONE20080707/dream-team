import React from "react"
import MoreButton from "@/components/ui/button/MoreButton"
import Image from "next/image"
import AboutCard from "@/components/ui/ItemCard/AboutCard"

interface AboutSection_02Props {
  title: string // 見出しテキスト
  description: string // 本文
  buttonHref?: string // ボタンリンク先（任意）
  imageUrl?: string // 画像URL（任意）
  position?: string // 役職（任意）
  name?: string // 氏名（任意）
}

const AboutSection_02 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_02Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <div className="flex flex-col md:flex-row justify-start md:space-x-20">
      <div
        className="h-[300px] md:h-auto relative mt-10 md:mt-0 w-full"
        style={{ marginLeft: "calc(50% - 50vw)" }}
      >
        <Image
          src={imageUrl || "/top/about/about.png"}
          alt={name || "message"}
          fill
          className="object-cover w-full h-full rounded-r-[10px]"
        />
      </div>
      <div className="md:max-w-[600px]">
        {/* サービスリスト */}
        <div className="space-y-6 border-t border-gray-200 pt-6">
          <AboutCard
            number="01"
            title="お子さんの中学校に合わせた定期テスト対策を実施"
            description="本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります"
          />
          <AboutCard
            number="02"
            title="授業頻度が学校に合っているので内申書対策になる"
            description="本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります"
          />
          <AboutCard
            number="03"
            title="定期テスト当日の朝も塾を開校しバッチリフォロー"
            description="本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります"
          />
          <AboutCard
            number="04"
            title="学校課題の管理も実施"
            description="本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります本文はいります"
            isLast={true}
          />
        </div>

        {/* {(position || name) && (
          <p className="mt-10 text-lg !leading-[250%]">
            {position}
            <br />
            {name}
          </p>
        )}
        {buttonHref && (
          <MoreButton href={buttonHref} className="mt-10" variant="blue" />
        )} */}
      </div>
    </div>
  )
}

export default AboutSection_02
