import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'
import '@/styles/animations.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TOD Studios | Creative Visual Storytelling',
  description: 'Transforming ideas into compelling visual narratives',
  openGraph: {
    title: 'TOD Studios',
    description: 'Creative visual storytelling and production',
    type: 'website'
  }
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}