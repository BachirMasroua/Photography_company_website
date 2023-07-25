import Link from "next/link";

const Contact = () => {
    return ( 
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 via-green-100 to-green-200">
      <form className="bg-white p-16 rounded-lg shadow-md">
        <h2 className="text-3xl mb-4">Contact Us</h2>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 border border-gray-300" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300" />
        <button type="submit" className="w-full py-3 bg-gray-500 text-white font-bold rounded-md transition-colors hover:bg-black">
          Submit
        </button>
      </form>
    </div>
     );
}
 
export default Contact;