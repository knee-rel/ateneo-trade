import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";

//icons
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Set state to manage link captions
  const [showHeaderLink, setShowHeaderLink] = useState(false);

  //geting from redux the information of cart and users
  const { cartItems } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing header navigation items
  const primaryHeaderItems = [
    {
      id: 1,
      text: "Sign-In",
      link: userInfo ? "/profile" : "/login",
      icon: <IoPersonSharp />,
    },
    { id: 2, text: "Wish List", link: "/wish-list", icon: <FaHeart /> },
    { id: 3, text: "Bag", link: "/cart", icon: <FaShoppingBag /> },
  ];

  const secondaryHeaderItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Shop", link: "/" },
    { id: 3, text: "Contact Us", link: "/" },
    { id: 4, text: "FAQs", link: "/" },
    { id: 5, text: "Contact Us", link: "/" },
  ];

  //useEffect to update showHeaderLink on window resize
  useEffect(() => {
    const handleResize = () => {
      setShowHeaderLink(window.innerWidth >= 768);
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="dark:bg-[#707793] bg-white flex justify-between items-center h-24 w-full mx-auto px-4 dark:text-white text-black">
        {/* Logo */}
        <div className="mr-auto md:w-48 flex-shrink-0 w-1/8">
          <Link to="/">
            <img
              className="h-8 md:h-10"
              src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
              alt=""
            />
          </Link>
        </div>

        {/* Primary Desktop Navigation */}
        <div className="w-1/2 2xl:max-w-2xl bg-gray-100 dark:bg-[#707793] rounded-md hidden md:flex items-center">
          <div className="flex items-center justify-center w-full">
            <select
              className="bg-transparent uppercase font-bold text-sm p-4 mr-4 w-full"
              name=""
              id=""
            >
              <option>all categories</option>
            </select>
            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 w-full"
              type="text"
              placeholder="I'm searching for ..."
            />
          </div>
        </div>
        {/* primary navigation items */}
        <nav className="hidden md:flex w-1/4">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            {showHeaderLink &&
              primaryHeaderItems.map((item) => (
                <li key={item.id} className="ml-2 lg:ml-4 flex">
                  <Link to={item.link} className="flex items-center">
                    {window.innerWidth <= 768 ? (
                      <>
                        <p className="ml-2">{item.text}</p>
                        {item.icon}
                        {/* Logic for the Sign-In/Logout Button Rendering */}
                        {item.text === "Sign-In" && userInfo ? (
                          <div className="dark:bg-[#1d1e23] bg-white justify-center items-center h-14 mx-auto px-4 dark:text-white text-black hidden md:flex w-full">
                            <Link className="p-4 hover:bg-[#3bba9c] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                              <p>{userInfo.name}</p>
                            </Link>
                            <button onClick={logoutHandler}>Logout</button>
                          </div>
                        ) : (
                          <p>Sign-In</p>
                        )}
                      </>
                    ) : (
                      <>{item.icon}</>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
          {cartItems.length > 0 && (
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700 -ml-1 pb-3">
              {cartItems.reduce((a, c) => a + c.qty, 0)}
            </span>
          )}
        </nav>

        {/* Mobile Navigation Icon Unopened */}
        <div onClick={handleNav} className="block md:hidden">
          <AiOutlineMenu size={20} />
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "flex-row items-center justify-center fixed md:hidden left-0 top-0 w-[100%] h-full border-r dark:border-r-gray-900 border-r-gray-300 dark:bg-[#707793] bg-white ease-in-out duration-500 p-8"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="h-8 md:h-10"
                src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
                alt=""
              />
            </Link>
            {/* nav menu logic */}
            <div onClick={handleNav} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>

          {/* search bar component */}
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

          {/* Mobile Navigation Items */}
          <div>
            <div className="flex flex-col items-start justify-center">
              {/* secondary mobile header items */}
              {secondaryHeaderItems.map((item) => (
                <Link
                  key={item.id}
                  className="p-4 border-b w-full rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-200"
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* primary header navigation items */}
            {primaryHeaderItems.map((item) => (
              <li className="lg:ml-4 flex items-center">
                <Link
                  to={item.link}
                  className="flex items-center p-4 border-b w-full rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-200"
                >
                  {item.icon === <FaShoppingBag /> ? (
                    <div className="flex items-center">
                      {item.text}
                      {cartItems.length > 0 && (
                        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                          {cartItems.reduce((a, c) => a + c.qty, 0)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <>{item.icon}</>
                  )}
                  <p className="ml-3 dark:text-white text-black">{item.text}</p>
                </Link>
              </li>
            ))}
            {cartItems.length > 0 && (
              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </div>
        </ul>
      </div>

      {/* secondary header desktop mode */}
      <div className="dark:bg-[#707793] bg-white justify-center items-center h-14 mx-auto px-4 dark:text-white text-black hidden md:flex w-full">
        <div className="flex items-center justify-between">
          <ul className="hidden md:flex">
            {secondaryHeaderItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="p-4 hover:bg-[#3bba9c] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                {item.text}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
