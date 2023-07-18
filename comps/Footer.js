import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
        <div className="social-media-links">
          <Link href="https://www.facebook.com/" target="_blank"><img className="socialicons" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="Facebook"></img> Facebook</Link>
          <Link href="https://www.Twitter.com/" target="_blank"><img className="socialicons" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt="Twitter"></img> Twitter</Link>
          <Link href="https://www.Instagram.com/" target="_blank"><img className="socialicons" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="Instagram"></img> Instagram</Link>
        </div>
      </footer>
     );
}
 
export default Footer;