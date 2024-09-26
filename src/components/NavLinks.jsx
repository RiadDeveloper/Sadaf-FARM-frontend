import { Link } from "react-router-dom";


const NavLinks = () => {
  return (
    <div className="text-white text-lg flex gap-6">
     <nav className="bg-neutral-800 text-white">
      {/* Desktop Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Links */}
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="">Home</Link>
              <Link to="chat">Chat</Link>
              <Link to="invest">Invest</Link>
              <Link to="contact-us">Contact Us</Link>
              <Link to="about-us">About Us</Link>
              <Link to="privacy-policy">Privacy Policy</Link>
              <Link to="login">Login</Link>
              <Link to="sign-up">Sign Up</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
          </div>
        </div>
      </div>
    </nav>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="">Home</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="chat">Chat</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="invest">Invest</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="contact-us">Contact Us</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="about-us">About Us</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="privacy-policy">Privacy Policy</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="login">Login</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="sign-up">Sign Up</Link>
      <Link className="hover:drop-shadow-[0_0_0.05rem_white] duration-200" to="forget-password">Forgot Password</Link>
    </div>
  );
};

export default NavLinks;