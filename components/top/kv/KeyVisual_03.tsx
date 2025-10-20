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
      <FirstViewContent className="relative h-[calc(100vh-100px)] ">
        {/* widthがフルサイズでない場合は指定する */}
        {/* キービジュアルの画像 */}
        <section className="w-[80%] h-full absolute right-0 rounded-l-[20px] overflow-hidden">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-full" />
        </section>
        <div className="md:max-w-[1700px] mx-auto flex flex-col justify-center gap-10 h-full relative px-5">
          <TopPageHeadline
            subtitleTop={
              <>お子さんの学校・学年に合わせた最適な学習指導で成績アップ</>
            }
            mainTitle={
              <>
                どんな子も伸ばす、
                <br />
                一人ひとりに寄り添う学び。
              </>
            }
            subtitleBottom="日本語のテキストが入ります。"
          />
          {/* カードレイアウト */}
          <FeatureCards />
        </div>
      </FirstViewContent>

      {/* CTAカード */}
      <div className="-mt-20 relative">
        <CtaCard />
      </div>
    </div>
  )
}

export default KeyVisual_03
