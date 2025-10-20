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
      <Image
        src="/top/kv/kv_img1.jpg"
        alt="KV Image"
        priority
        fill
        className="object-cover"
      />
    </div>
  )
}

export default KeyVisualContent
