import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface SubmitButtonProps {
  loading: boolean
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="relative w-[80vw] max-w-[350px] py-4 px-0 rounded-[30px] border border-accentColor bg-white text-lg text-accentColor hover:opacity-70 flex items-center justify-center font-semibold"
    >
      {loading ? "送信中..." : "送信する"}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white rounded-full flex justify-center items-center w-6 h-6 bg-accentColor">
        <ArrowRight className="w-3 h-3" />
      </div>
    </button>
  )
}

export default SubmitButton
