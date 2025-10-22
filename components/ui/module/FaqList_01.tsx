import { useState } from "react"
import Image from "next/image"
import { faqData, FaqData } from "@/data/faqData"

const FaqList_01 = ({ hideTab = false }: { hideTab?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqData>("category1")

  return (
    <>
      {/* タブナビゲーション */}
      {!hideTab && (
        <div className="flex justify-center gap-10 mb-8 border-t border-b border-[#EFEFEF]">
          {Object.entries(faqData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key as keyof typeof faqData)
                setOpenIndex(null)
              }}
              className={`px-1 py-4 text-sm font-bold ${
                activeCategory === key
                  ? "bg-white text-accentColor border-b-4 border-accentColor"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* FAQリスト */}
      <div className="mt-16">
        {faqData[activeCategory].items.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div
              className="flex justify-between py-6 px-4 md:px-10 bg-bgLight cursor-pointer rounded-[10px]"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex text-lg">
                <Image
                  src="/common/question-blue.svg"
                  alt="?マーク"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                {item.question}
              </div>
              <div className="flex-shrink-0"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M2 14H26"
                  stroke="#4270ED"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={openIndex === index ? "hidden" : ""}
                />
                <path
                  d="M14 26L14 2"
                  stroke="#4270ED"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg></div>
              
            </div>
            {openIndex === index && (
              <div className="py-6 px-10 bg-white border flex">
                <Image
                  src="/common/answer-red.svg"
                  alt="?マーク"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default FaqList_01
