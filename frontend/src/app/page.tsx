"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.jpg" 
            alt="Hero Background" 
            fill 
            priority 
            style={{objectFit: 'cover'}}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Creative Visual Storytelling
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforming ideas into powerful visual narratives
          </p>
          <div className="space-x-4">
            <Link 
              href="/work" 
              className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="inline-block border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black"
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
            <div key={index} className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="mx-auto w-16 h-16 mb-4">
                <Image 
                  src={service.icon} 
                  alt={`${service.title} icon`} 
                  width={64} 
                  height={64} 
                  className="mx-auto"
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