import Link from "next/link";

const Header = () => {
    return ( 
        <header>
            <div>
                <img src="/images/logo.png" />
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </header>
     );
}
 
export default Header;