import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";


const NavUser = () => {
  return (
    <div className="hidden md:flex md:items-center ml-10 space-x-8">
      <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="chat">Chat</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="invest">Invest</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="contact-us">Contact Us</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="about-us">About Us</NavLink>
      {/* <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="login">Login</NavLink> */}
      {/* <NavLink className={({ isActive }) => isActive ? 'text-gray-900 font-semibold bg-gray-300 px-3 py-1 rounded-lg' : ''} to="sign-up">Join Us <MdArrowOutward className="inline mb-[5px]" /></NavLink> */}
      <Link to='sign-up' name="Username" className="text-white text-center border-2 px-8 py-3 rounded-lg bg-neutral-800 border-gray-300" id="">Join Us <MdArrowOutward className="inline mb-[5px]" /></Link>

      {/* <select name="Username" className="text-white border-2 p-2 pb-[10px] rounded-lg bg-neutral-800 border-gray-300" id="">
        <option value="">Join Us</option>
      </select> */}
  
    </div>
  );
};

export default NavUser;