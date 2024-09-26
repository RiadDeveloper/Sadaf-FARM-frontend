import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const NavLinks = () => {
  return (
    <div className="text-white text-lg flex gap-6">
      <nav className="bg-neutral-800 text-white">
        {/* Desktop Menu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Links */}
              <div className="hidden md:flex md:items-center ml-10 space-x-8">
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="chat">Chat</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="invest">Invest</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="contact-us">Contact Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="about-us">About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="login">Login</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 p-2 rounded-lg' : ''} to="sign-up">Join Us <MdArrowOutward /></NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;