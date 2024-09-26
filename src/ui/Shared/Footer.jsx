import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-24 pt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <Link className="mb-4 md:mb-0" to="">
          <Logo size={60} />
        </Link>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-16 text-center md:text-left">
          {/* Product Links */}
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold text-xl mb-2">Product</h5>
            <ul className="gap-24">
              <li className="mb-3">
                <Link to="features" className="hover:underline text-gray-300 font-thin">Features</Link>
              </li>
              <li>
                <Link to="pricing" className="hover:underline text-gray-300 font-thin">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-bold text-xl mb-2">Company</h5>
            <ul>
              <li className="mb-3">
                <Link to="about-us" className="hover:underline text-gray-300 font-thin">About us</Link>
              </li>
              <li className="mb-3">
                <Link to="contact-us" className="hover:underline text-gray-300 font-thin">Contact us</Link>
              </li>
              <li className="mb-3">
                <Link to="invest" className="hover:underline text-gray-300 font-thin">Invest</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-start items-center text-sm">
          <p className="mb-4 mr-10 md:mb-0 text-gray-300 font-thin">
            © 2024 captailkv. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="privacy-policy" className="hover:underline text-gray-300 font-thin">
              Privacy Policy
            </Link>
            <Link to="terms-service" className="hover:underline text-gray-300 font-thin">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="container mx-auto px-4 mt-4 flex justify-center space-x-4 text-gray-500">
          <Link to="youtube" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="linkedin" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
