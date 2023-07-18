import Link from "next/link";

const Contact = () => {
    return ( 
        <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <button type="submit">Submit</button>
      </form>
     );
}
 
export default Contact;