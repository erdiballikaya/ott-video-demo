import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About TOD Studios</h1>
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[500px] mb-8">
          <Image 
            src="/images/studio-team.jpg" 
            alt="TOD Studios Team" 
            fill
            style={{objectFit: 'cover'}}
            className="rounded-lg"
          />
        </div>
        <div className="text-center">
          <p className="text-lg mb-4">
            TOD Studios is a creative visual storytelling agency dedicated to transforming ideas into compelling narratives.
          </p>
          <p className="text-lg">
            We combine technical expertise with creative passion to deliver exceptional visual experiences.
          </p>
        </div>
      </div>
    </div>
  );
}