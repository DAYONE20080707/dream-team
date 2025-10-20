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
    template: "%s | チョイスWeb制作",
    default: "チョイスのWeb制作は",
  },
  description: "チョイスは、",
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
