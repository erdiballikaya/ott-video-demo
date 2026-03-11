import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.jpg" 
            alt="Hero Background" 
            fill 
            priority 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Creative Visual Storytelling
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Transforming ideas into powerful visual narratives that inspire and connect.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/work" 
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Creative Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Video Production",
              description: "Crafting compelling visual stories that engage and inspire.",
              icon: "/icons/video-camera.svg"
            },
            {
              title: "Creative Direction",
              description: "Innovative strategies that bring your brand vision to life.",
              icon: "/icons/creative-design.svg"
            },
            {
              title: "Content Strategy",
              description: "Developing impactful narratives across multiple platforms.",
              icon: "/icons/strategy.svg"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Image 
                  src={service.icon} 
                  alt={`${service.title} icon`} 
                  width={32} 
                  height={32} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}