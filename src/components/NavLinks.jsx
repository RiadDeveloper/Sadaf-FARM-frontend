import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="text-white text-lg flex gap-6">
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="">Home</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="chat">Chat</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="invest">Invest</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="contact-us">Contact Us</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="about-us">About Us</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="privacy-policy">Privacy Policy</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="login">Login</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="sign-up">Sign Up</Link>
    </div>
  );
};

export default NavLinks;