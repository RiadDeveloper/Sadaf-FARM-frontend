import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="text-blue-300 text-lg flex gap-4">
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/">Home</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/chat">Chat</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/invest">Invest</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/contact-us">Contact Us</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/about-us">About Us</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/privacy-policy">Privacy Policy</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/terms-of-services">Terms of Services</Link>
      <Link className="hover:drop-shadow-[0_0_0.25rem_#0ea5e9] duration-200" to="/profile">Profile</Link>
    </div>
  );
};

export default NavLinks;