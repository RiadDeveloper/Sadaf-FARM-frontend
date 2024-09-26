import { Link } from "react-router-dom";

const NavUser = () => {
  return (
    <div>
      <Link to='login' name="Username" className="text-white text-center border-2 px-3 py-2 rounded-lg bg-neutral-800 border-gray-300" id="">Login</Link>

      {/* <select name="Username" className="text-white border-2 p-2 pb-[10px] rounded-lg bg-neutral-800 border-gray-300" id="">
        <option value="">Join Us</option>
      </select> */}
    </div>
  );
};

export default NavUser;