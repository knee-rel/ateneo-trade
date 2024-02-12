import React from "react";
import { Link } from "react-router-dom";

//icons
import PersonIcon from "./icons/PersonIcon";
import HeartIcon from "./icons/HeartIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";

import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center">
        <div className="mr-auto md:w-48 flex-shrink-0">
          <Link to="/">
            <img
              className="h-8 md:h-10"
              src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
              alt=""
            />
          </Link>
        </div>

        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
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

        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link to="#">
                {/* <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg> */}
                <PersonIcon />
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link to="#">
                {/* <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  3
                </div> */}
                {/* heart icon */}
                <HeartIcon />
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block justify-items-center">
              <Link to="#">
                {/* <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  12
                </div> */}
                {/* shopping cart */}
                {cartItems.length > 0 && (
                  <span class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
                <ShoppingCartIcon />
              </Link>
            </li>
          </ul>
        </nav>

        {/* <div class="ml-4 hidden sm:flex flex-col font-bold">
          <span class="text-xs text-gray-400">Your Cart</span>
          <span>$2,650,59</span>
        </div> */}
      </div>

      <hr />
    </header>
  );
};

export default Header;
