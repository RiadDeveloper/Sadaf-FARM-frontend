import Logo from "../../components/Logo";
import NavLinks from "../../components/NavLinks";
import NavUser from "../../components/NavUser";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-3 bg-neutral-800 items-center justify-between hidden md:flex">
      <Link to=""><Logo size={50} /></Link>      
      <NavLinks />
      <NavUser />
    </nav>
  );
};

export default Header;