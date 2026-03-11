"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.jpg" 
            alt="Hero Background" 
            fill
            priority
            style={{
              objectFit: 'cover',
              zIndex: -1
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Creative Visual Storytelling
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Transforming ideas into powerful visual narratives
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => window.location.href='/work'}
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              View Our Work
            </button>
            <button 
              onClick={() => window.location.href='/contact'}
              className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
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
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate and transform your creative vision into a powerful visual narrative.
          </p>
          <button 
            onClick={() => window.location.href='/contact'}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}