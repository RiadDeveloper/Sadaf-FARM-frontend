import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

const Home = () => {
  return (
    <div className="bg-neutral-900 min-h-screen text-stone-50">
      <Header />
      <Outlet />
      <h1>Hello world</h1>
      <Footer />
    </div>
  );
};

export default Home;