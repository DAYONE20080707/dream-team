// components/voice/Voice_01.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import VoiceCard from "@/components/ui/ItemCard/VoiceCard"
import { voiceData } from "@/data/top/VoiceData"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"

const Voice_01 = () => {
  // 表示するクチコミ数をvoiceDataのIDを指定して表示
  const voiceIdsToDisplay = [1, 2, 3]

  // 指定したIDに基づいてデータをフィルタリング
  const voicesToDisplay = voiceData.filter((voice) =>
    voiceIdsToDisplay.includes(voice.id)
  )

  return (
    <>
      <SectionContent variant="cream" id="voice">
        <section className="md:max-w-[1280px] mx-auto">
          <ContentHeadline
            subTitle="Voice"
            mainTitle="生徒さんの声"
            className="text-accentColor"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />
          <p className="text-2xl text-accentColor font-bold text-center">
            GoogleMap でも高評価のクチコミをたくさんいただいています！
          </p>

          <div className="mt-5 flex items-center justify-center gap-10">
            <div className="flex justify-center">
              <Image
                src="/top/voice/award1.png"
                alt="Award 1"
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/top/voice/award2.png"
                alt="Award 2"
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/top/voice/award3.png"
                alt="Award 3"
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-5 text-base text-accentColor font-bold text-center">
            ※上記は、過去１年間(2024 年9 月１日〜2025 年８月31
            日)に投稿頂いたクチコミ件数・評価を記載しています。
          </p>
          <div className="mt-20 grid grid-cols-1 gap-6">
            {voicesToDisplay.map((voice) => (
              <VoiceCard
                key={voice.id}
                name={voice.name}
                comment={voice.comment}
                image={voice.image}
                instructorComments={voice.instructorComments}
              />
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Voice_01
