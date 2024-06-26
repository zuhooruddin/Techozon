"use client";  
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Contact Us
        </h2>          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
