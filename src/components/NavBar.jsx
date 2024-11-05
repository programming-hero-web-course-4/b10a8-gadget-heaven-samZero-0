
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import {  CartCountContext, WishCountContext } from "../pages/MainLayout";

const NavBar = () => {

  let location = useLocation();

  const {cartCount} = useContext(CartCountContext);
  const {wishCount} =useContext(WishCountContext);

  useEffect(()=>{
    console.log(location)
  },[location])

    return (
        <div  className="md:w-11/12 md:mx-auto">

  <div className={`navbar ${location.pathname==='/'? 'bg-cover rounded-t-xl mt-5 text-white':'bg-base-100 mt-5'}`}>
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
  <div className="navbar-end flex gap-5 items-center ">
    <div className="relative" >
    <div className=" text-xl text-right rounded-full h-[20px] w-[20px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10">
  {cartCount !== 0 && (
    <span>{cartCount}</span>
  )}
</div>
    <IoMdCart className={`text-4xl bg-white rounded-full p-2 text-black realtive ${location.pathname==='/'?'':'border border-black'}`}></IoMdCart>
    </div>


   <div className="relative" >
   <div className=" text-xl text-right rounded-full  h-[20px] w-[20px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10">

   {wishCount !== 0 && (
    <span>{wishCount}</span>
  )}
   </div>
   <FaRegHeart className={`text-4xl md:mr-0 mr-5 bg-white text-black rounded-full p-2 ${location.pathname==='/'?'':'border border-black'}`}></FaRegHeart>
   </div>
  </div>
</div>

        </div>
         
       
    )
};

export default NavBar;