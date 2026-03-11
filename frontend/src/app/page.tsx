import Link from 'next/link'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { WorkGallery } from '@/components/sections/WorkGallery'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Creative Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Video Production" 
            description="Crafting compelling visual stories that engage and inspire."
            icon="/icons/video-camera.svg"
          />
          <ServiceCard 
            title="Creative Direction" 
            description="Innovative strategies that bring your brand vision to life."
            icon="/icons/creative-design.svg"
          />
          <ServiceCard 
            title="Content Strategy" 
            description="Developing impactful narratives across multiple platforms."
            icon="/icons/strategy.svg"
          />
        </div>
      </section>

      <WorkGallery />

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate and transform your creative vision into a powerful visual narrative.
          </p>
          <Link 
            href="/contact" 
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}