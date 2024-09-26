import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import MobileNav from "../components/MobileNav";

const Home = () => {
  return (
    <div className="bg-neutral-900 min-h-screen text-stone-50">
      <Header />
      <MobileNav />
      <Outlet />
      <Footer className='relative bottom-0' />
    </div>
  );
};

export default Home;