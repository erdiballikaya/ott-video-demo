import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/animations.css'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TOD Studios',
  description: 'Creative visual storytelling',
  metadataBase: new URL('https://todstudios.com')
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}