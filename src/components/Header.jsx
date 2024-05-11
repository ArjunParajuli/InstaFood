import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/context/useOnlineStatus";
import userContext from "../utils/context/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Log in")
  const onlineStatus = useOnlineStatus();

  // subscribing to the store using a selector
  const cartItems = useSelector((state) => state.cart.items)
  console.log(typeof(cartItems))
  
  const { userName } = useContext(userContext); 

  if(onlineStatus === false) return <div>Ahh!! This darned internet ❌</div>
  
    return(
      <div className='flex justify-between gap-3 px-11 py-7 border rounded-sm my-4 max-[650px]:px-3 bg-[#8BC34A] text-white'>
        <div className='' >
          <img className='h-[70px] w-[75px] rounded-full max-[650px]:h-[30px] max-[650px]:w-[30px]' src="/restro_logo.png" alt="logo"></img>
        </div>
        <ul className=' flex items-center gap-10 text-lg font-semibold max-[650px]:text-xs max-[650px]:gap-3'>
          <li className="cursor-pointer hover:text-red-400 ">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-red-400">
            <Link to='/about'>About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-red-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="cursor-pointer hover:text-red-400">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className='flex items-center cursor-pointer relative'>
            <Link to="/cart">
            <FaShoppingCart className='text-2xl hover:text-green-600 max-[650px]:text-md' /> 
            <span className='bg-green-600 w-4 h-4 rounded-full text-sm absolute -top-1 -right-1 flex justify-center items-center animate-bounce '>
              {cartItems.length}
            </span> 
            </Link>
            
          </li>
          <li>
            <button className="bg-[#FF5722] px-2 py-1 rounded-md transition duration-300 hover:scale-105" onClick={()=>{
              loginStatus==='Log in' ? setLoginStatus("Log out") : setLoginStatus("Log in")
            }}>{loginStatus}</button>
          </li>
          <li>{loginStatus==='Log out' && userName}</li>
        </ul>
      </div>
    );
  }

  export default Header;