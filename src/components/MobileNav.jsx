import { FaHome, FaList, FaTags, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

  const MobileNav = () => {
    return (
      <nav>
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-black text-white pt-2 pb-2">
          <div className="flex justify-around py-3">
            <NavLink to="/" className="flex flex-col items-center text-xs text-gray-300 hover:text-white">
              <FaHome size={20} />Home
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center text-xs text-gray-300 hover:text-white">
              <FaList size={20} />Features
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center text-xs text-gray-300 hover:text-white">
              <FaTags size={20} />Pricing
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center text-xs text-gray-300 hover:text-white">
              <FaPhone size={20} />Contact
            </NavLink>
            <NavLink to="/" className="flex flex-col items-center text-xs text-gray-300 hover:text-white">
              <FaExternalLinkAlt size={20} />Join
            </NavLink>
          </div>
        </div>
      </nav>
    );
  };
  export default MobileNav;