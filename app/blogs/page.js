
import React from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
    export const dynamic = 'force-dynamic';

const fetchBlogs = async () => {
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const metadata = {
  title: 'My Content',
};

const BlogsPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Explore Our Blogs
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
                {blog.imageUrl && (
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="flex flex-col flex-grow p-6">
                  <h2 className="text-3xl font-semibold mb-4 text-gray-700">{blog.title}</h2>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {blog.content.substring(0, 40)}...
                  </p>
                  <div className="text-right">
                    <span className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300">
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
