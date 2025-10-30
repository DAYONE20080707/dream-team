import React from "react"
import Image from "next/image"

interface VoiceCardProps {
  name: string
  comment: string
  image: string
  instructorComments: string[]
}

const VoiceCard: React.FC<VoiceCardProps> = ({
  name,

  comment,
  image,
  instructorComments,
}) => {
  return (
    <div className="bg-white rounded-[17px] p-5 md:p-10">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        {/* テキスト情報 */}
        <div className="flex-1">
          <h3 className="text-accentColor font-bold text-xl">{name}</h3>
          <p className=" mt-4 text-base leading-[160%]">{comment}</p>

          <div className="mt-6 flex rounded-[10px] gap-4 bg-bgBlue py-4 px-4 md:px-10">
            <div className="flex-shrink-0">
              <Image
                src="/top/voice/voice_man.png"
                alt={name}
                width={98}
                height={106}
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-bold">〈講師から一言〉</p>
              <ul className="space-y-1">
                {instructorComments.map((comment, index) => (
                  <li key={index} className="text-lg font-bold">
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* 生徒画像 */}
        <div className="flex-shrink-0 md:w-[40%] h-full">
          <div className="relative rounded-[4px] overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={467}
              height={286}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoiceCard
