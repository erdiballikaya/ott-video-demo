import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all group">
      <div className="mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
        <Image 
          src={icon} 
          alt={`${title} icon`} 
          width={32} 
          height={32} 
          className="group-hover:scale-110 transition-transform"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}