"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import SubmitButton from "@/components/ui/button/SubmitButton"
import SectionContent from "@/components/ui/frame/SectionContent"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"

interface FormField {
  label: string
  name: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  placeholder?: string
  required: boolean
  options?: { value: string; label: string }[]
}

const formFields: FormField[] = [
  // {
  //   label: "お問い合わせ内容",
  //   name: "inquiryType",
  //   type: "select",
  //   options: [
  //     { value: "", label: "以下から選択してください" },
  //     { value: "inquiry1", label: "お問い合わせ内容1" },
  //     { value: "inquiry2", label: "お問い合わせ内容2" },
  //     { value: "inquiry3", label: "お問い合わせ内容3" },
  //   ],
  //   required: true,
  // },
  // {
  //   label: "会社名",
  //   name: "company",
  //   type: "text",
  //   placeholder: "株式会社〇〇〇〇〇〇",
  //   required: false,
  // },
  {
    label: "お子様のお名前",
    name: "name",
    type: "text",
    placeholder: "田中　太郎",
    required: false,
  },
  // {
  //   label: "所属部署名",
  //   name: "department",
  //   type: "text",
  //   placeholder: "営業部",
  //   required: false,
  // },
  // {
  //   label: "役職",
  //   name: "position",
  //   type: "text",
  //   placeholder: "役職名をご入力ください",
  //   required: false,
  // },
  {
    label: "電話番号",
    name: "phone",
    type: "tel",
    placeholder: "00-0000-0000",
    required: true,
  },
  {
    label: "メールアドレス",
    name: "email",
    type: "email",
    placeholder: "example@abc.co.jp",
    required: true,
  },
  {
    label: "住所",
    name: "address",
    type: "text",
    placeholder: "大阪府大阪市北区豊崎3-1-22淀川6番館201",
    required: true,
  },
  {
    label: "当塾を知ったきっかけ",
    name: "inquiry",
    type: "text",
    placeholder: "当塾を知ったきっかけ",
    required: true,
  },

  // {
  //   label: "ご検討中のサービス",
  //   name: "serviceType",
  //   type: "select",
  //   options: [
  //     { value: "", label: "以下から選択してください" },
  //     { value: "service1", label: "ご検討中のサービス1" },
  //     { value: "service2", label: "ご検討中のサービス2" },
  //     { value: "service3", label: "ご検討中のサービス3" },
  //   ],
  //   required: true,
  // },
  {
    label: "お問い合わせ内容",
    name: "message",
    type: "textarea",
    placeholder: "お問い合わせ内容を入力してください",
    required: true,
  },
]

const initialFormData: Record<string, string> = {}
formFields.forEach((field) => {
  initialFormData[field.name] = ""
})

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        router.push("/contact/thanks")
      } else {
        const data = await res.json()
        setResponseMessage(data.error || "送信に失敗しました。")
      }
    } catch (error) {
      setResponseMessage("エラーが発生しました。")
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionContent className="" variant="gradient" id="contact">
      <div className="w-full max-w-[1280px] mx-auto">
        <ContentHeadline
          mainTitle="お問い合わせ"
          subTitle="Contact"
          className="text-white text-center"
        />

        <section className="text-sm md:text-lg mt-10 md:mt-20 mx-auto text-white">
          {responseMessage && <p className="text-red-500">{responseMessage}</p>}
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div key={field.name} className="mb-6 md:mb-10 w-full">
                <label className="text-sm md:text-base block mb-1 md:mb-2 ![line-height:200%]">
                  {field.label}{" "}
                  {field.required && <span className="">(必須)</span>}
                </label>

                {field.type === "select" && field.options && (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white rounded-full [&>*]:bg-white appearance-none bg-[length:16px_10px] md:bg-[length:22px_10px] bg-[right_1.5rem_center] bg-no-repeat text-base md:text-lg"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L8 9L15 1' stroke='%23A38758' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    }}
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {field.type !== "select" && (
                  <>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={1}
                        className="w-full px-6 py-4 bg-white rounded-full placeholder:text-[#8D8D8D] placeholder:text-base md:placeholder:text-lg"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-6 py-4 bg-white rounded-full placeholder:text-[#8D8D8D] placeholder:text-base md:placeholder:text-lg ![line-height:170%]"
                      />
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="flex justify-center mt-10 md:mt-20">
              <SubmitButton loading={loading} />
            </div>
            <p className="text-center ![line-height:160%] text-xs md:text-sm mt-6 md:mt-16 tracking-[0.05em] whitespace-pre-line">
            上記ボタンを押すことで、利用規約および、当社のサービス等に関する情報を提供する目的で、<br />
株式会社ドリーム・チームが送信された個人情報を保管・処理することに同意したものとみなされます。<br />
お客様はこれらの情報提供をいつでも停止できます。<br />
個人情報の開示や削除依頼等のお問い合わせ先、およびお客様の個人情報を尊重して保護するための弊社取り組みについては、<br />
プライバシーポリシーをご覧ください。
            </p>
          </form>
        </section>
      </div>
    </SectionContent>
  )
}

export default ContactForm
