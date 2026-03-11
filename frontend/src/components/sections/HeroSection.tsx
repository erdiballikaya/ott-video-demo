import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Creative Visual Storytelling
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in">
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
  );
}