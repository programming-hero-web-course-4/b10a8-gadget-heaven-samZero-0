
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div  className="md:w-11/12 md:mx-auto">
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Statistics</a></li>
        <li><a>Dashboard</a></li>
       
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 text-lg">
      <li><NavLink to='/'>Home</NavLink></li>
      
        <li><NavLink to='/stats'>Statistics</NavLink></li>
     
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-10 items-center">
    <IoMdCart className="text-2xl"></IoMdCart>
    <FaRegHeart className="text-2xl md:mr-0 mr-5"></FaRegHeart>
  </div>
</div>

        </div>
         
       
    )
};

export default NavBar;