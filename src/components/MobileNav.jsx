import { FaHome, FaList, FaTags, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
  

  const MobileNav = () => {
    return (
      <nav>
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-black text-white pt-2 pb-2">
          <div className="flex justify-around py-3">
            <a href="/" className="flex flex-col items-center text-gray-300 hover:text-white">
              <FaHome size={20} />
              <span className="text-xs">Home</span>
            </a>
            <a href="/" className="flex flex-col items-center text-gray-300 hover:text-white">
              <FaList size={20} />
              <span className="text-xs">Features</span>
            </a>
            <a href="/" className="flex flex-col items-center text-gray-300 hover:text-white">
              <FaTags size={20} />
              <span className="text-xs">Pricing</span>
            </a>
            <a href="/" className="flex flex-col items-center text-gray-300 hover:text-white">
              <FaPhone size={20} />
              <span className="text-xs">Contact</span>
            </a>
            <a href="/" className="flex flex-col items-center text-gray-300 hover:text-white">
              <FaExternalLinkAlt size={20} />
              <span className="text-xs">Join</span>
            </a>
          </div>
        </div>
      </nav>
    );
  };
  export default MobileNav;