import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Logo size={60} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-16 text-center md:text-left">
          {/* Product Links */}
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold mb-2">Product</h5>
            <ul>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li>
                <a href="#about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#invest" className="hover:underline">
                  Invest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            © 2024 captailkv. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="container mx-auto px-4 mt-4 flex justify-center space-x-4 text-gray-500">
          <a href="#youtube" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#linkedin" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
