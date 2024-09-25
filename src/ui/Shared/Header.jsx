import Logo from "../../components/Logo";
import NavLinks from "../../components/NavLinks";
import NavUser from "../../components/NavUser";

const Header = () => {
  return (
    <nav className="p-3 bg-stone-800 flex items-center justify-between">

      <Logo />
      <NavLinks />
      <NavUser />

    </nav>
  );
};

export default Header;