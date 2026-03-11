"use client"
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic form submission logic
    console.log('Form submitted', formData)
    alert('Thank you for your message!')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Contact TOD Studios
      </h1>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input 
            type="text" 
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input 
            type="email" 
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea 
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 border rounded-lg h-32"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}