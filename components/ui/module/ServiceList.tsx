// components/ui/module/ServiceList.tsx

interface ServiceItem {
  number: string
  title: string
  description: string
}

interface ServiceListProps {
  services: ServiceItem[]
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="space-y-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="border-b border-gray-200 pb-6 last:border-b-0"
        >
          <div className="flex flex-col space-y-3">
            <span className="text-blue-400 text-sm font-light">
              {service.number}
            </span>
            <h3 className="text-blue-900 text-lg font-bold leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceList
