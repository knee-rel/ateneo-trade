import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Button from "../components/Button";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qtyFromProductScreen = queryParams.get("qty");

  const [qty, setQty] = useState(
    qtyFromProductScreen ? parseInt(qtyFromProductScreen) : 1
  );

  // const addToCartHandler = async (product, qty) => {
  //   dispatch(addToCart({ ...product, qty }));
  // };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  // Use useEffect to update the quantity in the select box when qtyFromProductScreen changes
  useEffect(() => {
    setQty(qtyFromProductScreen ? parseInt(qtyFromProductScreen) : 1);
  }, [qtyFromProductScreen]);

  return (
    <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0">
      <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
        <div className="flex items-end lg:flex-row flex-col justify-end">
          <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto">
            <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                <Link to="/" className="my-3">
                  Go Back
                </Link>
              </p>
            </div>
            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
              Bag
            </p>

            {cartItems.length === 0 ? (
              <Message className="text-gray-800 dark:text-white">
                Your bag is empty.
              </Message>
            ) : (
              cartItems.map((item) => (
                <div
                  className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
                  key={item._id}
                >
                  <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <img
                      src={item.image}
                      alt="Black Leather Bag"
                      className="h-full object-center object-cover md:block hidden"
                    />
                    <img
                      src={item.image}
                      alt="Black Leather Bag"
                      className="md:hidden w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                      RK183
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <Link to={`/product/${item._id}`}>
                        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                          {item.name}
                        </p>
                      </Link>
                      <div className="flex items-center">
                        <p className="text-gray-800 dark:text-white mr-2">
                          Qty:
                        </p>
                        <select
                          className=""
                          id="quantity"
                          name="quantity"
                          value={qty}
                          onChange={(e) => {
                            const newQty = parseInt(e.target.value);
                            setQty(newQty);
                            // Update the quantity in the cart by dispatching an action
                            dispatch(addToCart({ ...item, qty: newQty }));
                          }}
                        >
                          {[...Array(item.countInStock).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                      Condition: {item.condition}/5
                    </p>
                    <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                      Deal Options: {item.dealOptions}
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                          Add to favorites
                        </p>
                        {/* <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                          Remove
                        </p> */}
                        <Button
                          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          onClick={() => removeFromCartHandler(item._id)}
                        >
                          Remove
                        </Button>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                        P{item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
              <div>
                <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </p>
                </div>
                <Button
                  disabled={cartItems.length === 0}
                  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
