import React from 'react';
import Link from 'next/link';

const fetchPosts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);

  const post = await response.json();
  console.log("Postsss",post)
  return post ;
};

const PostPage = async () => {
  const posts = await fetchPosts();
  console.log("Postsss",posts)

  return (
   
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Explore Our Posts
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col flex-grow p-6">
                  <h2 className="text-3xl font-semibold mb-4 text-gray-700">{post.title.substring(0, 20)}</h2>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {post.body.substring(0, 40)}...
                  </p>
                  <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-blue-300 text-blue-600 rounded-full text-sm font-medium cursor-not-allowed opacity-50">
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

export default PostPage;
