'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()

    return ( 
        <header className="
         border-b-2 border-gray-400 
        py-4 px-8 fixed top-0 left-0 right-0 z-10 bg-white">
          <div className="2xl:container mx-auto flex justify-between items-center">
            <Link href="/"><img className="lg:w-40 w-20" src="/images/logo.png" alt="Logo" /></Link>
            <nav>
              <ul className="flex lg:text-lg text-xs">
                <li className="mr-4">
                  <Link className={`${pathname === "/" ? ' border-2 border-gray-500' : ''} text-gray-700 p-2 rounded-md hover:text-white hover:bg-black`} href="/">
                    Home
                  </Link>
                </li>
                <li className="relative mr-4 group">
                  <Link className={`${pathname === "/about" ? ' border-2 border-gray-500' : ''} text-gray-700 p-2 rounded-md hover:text-white hover:bg-black`} href="/about">
                    About
                  </Link>
                </li>
                <li className="relative mr-4 group">
                  <Link className={`${pathname === "/contact" ? ' border-2 border-gray-500' : ''} text-gray-700 p-2 rounded-md hover:text-white hover:bg-black`} href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
     );
}
 
export default Header;