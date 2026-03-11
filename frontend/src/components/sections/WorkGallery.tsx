import Image from 'next/image'
import Link from 'next/link'

const WORK_ITEMS = [
  {
    id: '1',
    title: 'Brand Campaign',
    category: 'Commercial',
    image: '/images/work-1.jpg'
  },
  {
    id: '2',
    title: 'Documentary Film',
    category: 'Storytelling',
    image: '/images/work-2.jpg'
  },
  {
    id: '3',
    title: 'Product Launch',
    category: 'Marketing',
    image: '/images/work-3.jpg'
  },
  {
    id: '4',
    title: 'Music Video',
    category: 'Entertainment',
    image: '/images/work-4.jpg'
  }
]

export function WorkGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Selected Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_ITEMS.map((work) => (
            <Link 
              key={work.id} 
              href={`/work/${work.id}`} 
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-video">
                <Image 
                  src={work.image} 
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 text-center transition-opacity">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <p className="text-sm">{work.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}