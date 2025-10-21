"use client"
import Link from "next/link"
import Image from "next/image"
import { useTransition } from "react"
import { useRouter } from "next/navigation"

const CtaTrouble = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleClick = (href: string) => {
    startTransition(() => {
      router.push(href)
    })
  }

  return (
    <div className="py-10 md:py-16 bg-white text-center  px-6 md:px-0">
      <div className="bg-mainGreen md:md:max-w-[1280px] mx-auto text-white px-5 md:px-0 py-10 md:py-16 rounded-3xl">
        <h3 className="text-[22px] md:text-[28px]">
          トラブルにあってしまったら
        </h3>
        <p className="text-lg mt-2">消費者相談室へお気軽にご相談ください</p>
        <ul className="bg-white text-black flex justify-center  items-center relative md:w-[558px] mx-auto my-4 rounded-full py-1 md:py-4">
          <li>
            <Image
              src="/common/tel.svg"
              alt="電話アイコン"
              width={40}
              height={40}
              className="w-6 md:w-10"
            />
          </li>
          <li className=" text-2xl md:text-[46px] pb-1 ml-2 md:ml-4">
            03-5651-1122
          </li>
          <li>
            <Image
              src="/common/trouble_cta.png"
              alt="トラブルにあってしまったらのイメージアイコン"
              width={150}
              height={150}
              className="absolute -bottom-3 md:-bottom-8 -right-4 md:-right-20 w-16 md:w-[150px]"
            />
          </li>
        </ul>
        <p>
          受付：月～金曜日　
          <br className="block md:hidden" />
          10:00～12:00／13:00～16:00
          <br className="block md:hidden" />
          （年末・年始、祝日を除く）
        </p>
      </div>
    </div>
  )
}

export default CtaTrouble
