import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-800 shadow-lg">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-white no-underline hover:text-gray-200">
          Techozon
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
              About
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
