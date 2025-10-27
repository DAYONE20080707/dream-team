// components/kv/KeyVisual_03.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_01"
import ScrollButton from "@/components/ui/button/ScrollButton"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import FeatureCards from "@/components/ui/module/FeatureCards"
import CtaCard from "@/components/ui/module/CtaCard"

// キービジュアル
const KeyVisual_03 = () => {
  return (
    <div className="mt-[100px]">
      <FirstViewContent className="relative min-h-[calc(100vh-180px)] md:h-[calc(100vh-180px)] flex items-center md:block">
        {/* widthがフルサイズでない場合は指定する */}
        {/* キービジュアルの画像 */}
        <section className="w-[80%] h-full absolute right-0 rounded-l-[20px] overflow-hidden">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-full" />
        </section>
        <div className="md:max-w-[1700px] mx-auto flex flex-col justify-center gap-10 h-full relative px-5">
          <TopPageHeadline
            subtitleTop={
              <>お子さんの成績アップで<br className="md:hidden"/>家族も笑顔！</>
            }
            mainTitle={
              <>
                もう“勉強しなさい！”
                <br />
                とは言わせません
              </>
            }
            subtitleBottom="お子さんの中学校専用の対策を行います！"
          />
          {/* カードレイアウト */}
          {/* <FeatureCards /> */}
        </div>
      </FirstViewContent>

      {/* CTAカード */}
      <div className="-mt-20 relative px-5">
        <CtaCard />
      </div>
    </div>
  )
}

export default KeyVisual_03
