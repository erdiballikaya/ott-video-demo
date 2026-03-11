"use client"
import { Inter } from 'next/font/google'
import '../styles/animations.css'
import '../app/globals.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TOD Studios | Creative Visual Storytelling</title>
        <meta name="description" content="Creative visual storytelling and production" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}