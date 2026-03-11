import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">TOD Studios</h3>
          <p className="text-gray-300">
            Creative visual storytelling and production studio dedicated to transforming ideas into compelling narratives.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/work" className="hover:text-gray-300">Our Work</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
            <a href="#" className="hover:text-gray-300">Vimeo</a>
          </div>
          <div className="mt-4 text-gray-400">
            <p>© {new Date().getFullYear()} TOD Studios</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}