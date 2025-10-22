// components/ui/frame/KeyVisualContent.tsx
"use client"

import classNames from "classnames"
import Image from "next/image"

interface KeyVisualContentProps {
  className?: string
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  return (
    <div className={classNames("relative w-full", className)}>
      {/* PC用画像 */}
      <Image
        src="/top/kv/kv_img1.jpg"
        alt="KV Image PC"
        priority
        fill
        className="object-cover hidden md:block"
      />
      {/* SP用画像 */}
      <Image
        src="/top/kv/kv_img_sp.jpg"
        alt="KV Image SP"
        priority
        fill
        className="object-cover block md:hidden"
      />
    </div>
  )
}

export default KeyVisualContent
