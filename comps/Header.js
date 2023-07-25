import Link from "next/link";

const Header = () => {
    return ( 
        <header className="flex justify-between items-center border-b-2 border-gray-400 py-4 px-8 fixed top-0 left-0 right-0 z-10 bg-white">
      <div>
        <img className="w-40 mr-4" src="/images/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul className="flex">
          <li className="relative mr-4 group">
            <Link className="text-gray-700 hover:text-gray-500" href="/">
              Home
            </Link>
            <div className="absolute w-full h-0.5 bg-gray-500 bottom-0 left-0 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </li>
          <li className="relative mr-4 group">
            <Link className="text-gray-700 hover:text-gray-500" href="/about">
              About
            </Link>
            <div className="absolute w-full h-0.5 bg-gray-500 bottom-0 left-0 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </li>
          <li className="relative mr-4 group">
            <Link className="text-gray-700 hover:text-gray-500" href="/contact">
              Contact
            </Link>
            <div className="absolute w-full h-0.5 bg-gray-500 bottom-0 left-0 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </li>
        </ul>
      </nav>
    </header>
     );
}
 
export default Header;