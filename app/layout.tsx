import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"
import { Noto_Sans_JP, Hanken_Grotesk, Roboto } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Hanken Grotesk フォントの設定
const hankenGrotesk = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
})

// Roboto フォントの設定
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: {
    template: "%s | ドリーム・チーム",
    default: "ドリーム・チーム | どんな子も伸ばす、一人ひとりに寄り添う学び。",
  },
  description:
    "ドリーム・チームは、大阪府・京都府・兵庫県・滋賀県・福岡県に約70校舎展開する地域密着型学習塾です。子どもたちを元気な笑顔にする教育理念のもと、勉強に自信をなくしている子、勉強のやり方がわからない子、勉強のやる気がない子に真正面から向き合い、寄り添って対応します。",
  keywords:
    "学習塾, 個別指導, 中学生, 高校受験, 勉強, 成績アップ, 大阪, 京都, 兵庫, 滋賀, 福岡, 地域密着, ドリーム・チーム",
  openGraph: {
    title: "ドリーム・チーム | どんな子も伸ばす、一人ひとりに寄り添う学び。",
    description:
      "地域密着型学習塾ドリーム・チーム。勉強に自信をなくしている子、勉強のやり方がわからない子に真正面から向き合います。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ドリーム・チーム | どんな子も伸ばす、一人ひとりに寄り添う学び。",
    description:
      "地域密着型学習塾ドリーム・チーム。勉強に自信をなくしている子、勉強のやり方がわからない子に真正面から向き合います。",
  },
  icons: {
    icon: "/common/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body
        className={`font-notoSansJP text-baseColor ${hankenGrotesk.variable} ${roboto.variable}`}
      >
        <GoogleTagManager gtmId="GTM-5VZQPT43" />
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
