
  import Link from 'next/link';
  export const metadata = {
    title: 'Home',
  };
  export default function Home() {
    return (
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 min-h-screen flex flex-col justify-center items-center text-white">

        <div className="max-w-4xl w-full text-center">
  
<div className="max-w-5xl mx-auto text-center">
  <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">Welcome to My Classy Blog</h1>
  <p className="text-lg text-gray-700 mb-8">Discover captivating content and inspiring insights.</p>
</div>





          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/blogs/add/">
              <span className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-center items-center transform hover:scale-105">
                <h2 className="text-3xl text-green-800 font-semibold mb-4">Add</h2>
                <p className="text-lg text-gray-800">Add new content </p>
              </span>
            </Link>
            <Link href="/blogs">
              <span className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-center items-center transform hover:scale-105">
              <h2 className="text-3xl text-yellow-800 font-semibold mb-4">View</h2>
                <p className="text-lg text-gray-800">View existing content</p>
              </span>
            </Link>
            <Link href="/about">
              <span className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-center items-center transform hover:scale-105">
              <h2 className="text-3xl text-purple-400 font-semibold mb-4">About Us</h2>
                <p className="text-lg text-gray-800">Get in touch with us</p>
              </span>
            </Link>
          
            <Link href="/posts">
              <span className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-center items-center transform hover:scale-105">
                <h2 className="text-3xl text-gray-500 font-semibold mb-4">Api Data</h2>
                <p className="text-lg text-gray-800">My Personal data from api</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
