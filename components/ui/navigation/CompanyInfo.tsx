//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo_header.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo_square.png" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo.png" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "株式会社ドリーム・チーム",
    companyPostalCode: "〒531-0072",
    companyAddress: "大阪府大阪市北区豊崎3-1-22淀川6番館201",
    companyTel: "000-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
