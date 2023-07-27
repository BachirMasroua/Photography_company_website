import Link from "next/link";

const Footer = () => {
    return ( 
      <footer className="text-gray-700 bg-gradient-to-b from-gray-200 to-slate-400 text-center py-8 lg:text-base text-s">
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/" target="_blank" className="flex items-center hover:text-blue-600">
            <img
              className="h-6 w-6 mr-1"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
              alt="Facebook"
            />
            Facebook
          </Link>
          <Link href="https://www.Twitter.com/" target="_blank" className="flex items-center hover:text-blue-400">
            <img
              className="h-6 w-6 mr-1"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png"
              alt="Twitter"
            />
            Twitter
          </Link>
          <Link href="https://www.Instagram.com/" target="_blank" className="flex items-center hover:text-purple-700">
            <img
              className="h-6 w-6 mr-1"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              alt="Instagram"
            />
            Instagram
          </Link>
        </div>
      </div>
      <p className="pt-5">&copy; 2023 <Link className="inline-flex align-middle" href="/"><img className="lg:w-20 w-10" src="/images/logo.png" alt="Logo"></img></Link> Light Studio  All rights reserved.</p>
    </footer>
     );
}
 
export default Footer;