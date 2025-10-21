// components/module/cta/Cta_01.tsx
"use client"

import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import { ArrowDown, CircleArrowDown } from "lucide-react"

const Cta_01 = () => {
  return (
    <>
      <div className="bg-accentGreen">
        <section className="md:max-w-[1280px] mx-auto text-center py-16">
          <p className="text-white text-base mb-4">無料相談</p>
          <h2 className="text-white text-6xl md:text-[48px] font-black font-en mb-6">
            Contact
          </h2>
          <p className="text-white text-xl mb-12">
            無料相談はこちら! お気軽にお問い合わせください
          </p>

          <Link
            href="/contact"
            className="w-[350px] bg-white text-accentGreen px-8 py-4 rounded-full inline-flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-lg font-medium">お問い合わせはこちら</span>
            <div className="w-6 h-6 bg-accentGreen rounded-full flex items-center justify-center">
              <ArrowDown className="w-3 h-3 text-white" />
            </div>
          </Link>
        </section>
      </div>
    </>
  )
}

export default Cta_01
