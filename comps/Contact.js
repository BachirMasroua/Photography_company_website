const Contact = () => {
    return ( 
      <div className="flex items-center justify-center">
      <form className="bg-white lg:p-10 p-8 my-16 mx-1 rounded-lg shadow-md">
        <h2 className="lg:text-4xl text-2xl mb-4">Contact Us</h2>
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