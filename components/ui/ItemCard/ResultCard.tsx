// components/ui/ItemCard/ResultCard.tsx
import Image from "next/image";

interface ResultCardProps {
  name: string;
  result: string;
  score: string;
  image: string;
}

const ResultCard: React.FC<ResultCardProps> = ({
  name,
  result,
  score,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      {/* 生徒の画像 */}
      <div className="relative w-full h-[243px] mb-4 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* 生徒の名前 */}
      <p className="text-base mb-2 font-medium">{name}</p>

      {/* 点数アップボタン */}
      <div className="bg-accentColor text-accentYellow px-4 py-2 text-[28px] font-bold">
        {result}
        <br />
        {score}
      </div>
    </div>
  );
};

export default ResultCard;
