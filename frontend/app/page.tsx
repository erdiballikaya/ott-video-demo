import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">OTT Video Demo</h1>
        <p className="text-xl text-gray-600 mb-8">Explore our video streaming platform</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/videos" className="block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            Browse Videos
          </Link>
          <Link href="/about" className="block bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition">
            About the Platform
          </Link>
        </div>
      </div>
    </main>
  );
}
