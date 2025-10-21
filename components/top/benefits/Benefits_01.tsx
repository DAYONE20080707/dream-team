// components/benefits/Benefits_01.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01"
import { serviceData } from "@/data/top/ServiceData"
import SectionContent from "@/components/ui/frame/SectionContent"

const Benefits_01 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <SectionContent variant="cream" id="course">
        <section className="md:max-w-[1280px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Course"
            mainTitle="入試対策講座"
            className="text-accentColor"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                subTitle={service.subTitle}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                href={service.href} // リンク先を渡す
                className=" space-y-4"
              />
            ))}
          </div>
        </section>
        <p className="mt-20 mx-auto text-white font-bold text-2xl md:text-[45px] text-center pb-2 border-b border-white w-fit px-10 leading-[160%]">上記の対策を個別で行うから、結果が出るんです！</p>
      </SectionContent>
    </>
  )
}

export default Benefits_01
