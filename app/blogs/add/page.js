"use client";  

import { db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Link from 'next/link';

// export const metadata = {
//   title: 'About Us',
// };

export default function Add({ blogs }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setContent("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12">
  
      <div className="flex flex-col justify-center items-center py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Share Your Thoughts
        </h2>


        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter the title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              rows="6"
              placeholder="Enter the content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition transform hover:scale-105"
            >
              {loading ? "Adding..." : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
