// components/ui/ItemCard/AboutCard.tsx

interface AboutCardProps {
  number: string
  title: string
  description: string
  isLast?: boolean
}

const AboutCard: React.FC<AboutCardProps> = ({
  number,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div className={`pb-6 border-b border-gray-200`}>
      <div className="flex flex-col space-y-3">
        <span className="text-accentColor text-base font-black font-roboto">{number}</span>
        <h4 className="text-accentColor text-lg md:text-2xl font-bold leading-tight">
          {title}
        </h4>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default AboutCard
