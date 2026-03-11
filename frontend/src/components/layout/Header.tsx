import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          TOD Studios
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-black transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/work" 
                className="text-gray-700 hover:text-black transition-colors"
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}