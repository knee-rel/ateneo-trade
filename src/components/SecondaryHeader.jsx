import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

//other icons
import PersonIcon from "./icons/PersonIcon";
import HeartIcon from "./icons/HeartIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";

import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

import { useSelector } from "react-redux";

const SecondaryHeader = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  //geting from redux the information of cart and users
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    console.log("logout");
  };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Shop", link: "/" },
    { id: 3, text: "Contact Us", link: "/" },
    { id: 4, text: "FAQs", link: "/" },
    { id: 5, text: "Contact Us", link: "/"},
    {},
  ];

  return (
    <div className="dark:bg-black bg-white flex justify-between items-center h-24 mx-auto px-4 dark:text-white text-black">
      {/* Logo */}
      <div className="mr-auto md:w-48 flex-shrink-0">
        <Link to="/">
          <img
            className="h-8 md:h-10"
            src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
            alt=""
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      {/* Top Navigation Bar */}

      <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
        <div>
          <select
            className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
          >
            <option>all categories</option>
          </select>
          <input
            className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
        </div>
      </div>

      <div className="flex">
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 flex">
              <Link to="/profile" className="flex items-center">
                <IoPersonSharp />
                <p className="ml-1">Sign-In</p>
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 pl-3">
              <Link to="#" className="flex items-center">
                <FaHeart />
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 justify-items-center">
              <Link
                to="/cart"
                className="flex flex-col justify-center items-baseline pb-5 pl-3"
              >
                {cartItems.length > 0 && (
                  <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
                <FaShoppingBag />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* second navbar */}
      <div>
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondaryHeader;
