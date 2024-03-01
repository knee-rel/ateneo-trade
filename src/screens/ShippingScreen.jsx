import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { saveShippingAddress } from "../slices/cartSlice";

import Input from "../components/Input";
import Button from "../components/Button";
import BreadCrumbs from "../components/BreadCrumbs";

import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const breadcrumbs = [
    { label: "Shipping", url: "/shipping", icon: <MdLocalShipping /> },
    { label: "Payment", url: "/payment", icon: <MdOutlinePayment /> },
    { label: "Confirmation", url: "/confirmation", icon: <FaRegCheckCircle /> },
  ];

  const [firstName, setFirstName] = useState(shippingAddress?.firstName || "");
  const [lastName, setLastName] = useState(shippingAddress?.lastName || "");
  const [email, setEmail] = useState(shippingAddress?.email || "");
  const [mobile, setMobile] = useState(shippingAddress?.mobile || "");
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [state, setState] = useState(shippingAddress?.state || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneChange = (value) => {
    setMobile(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <div className="dark:bg-gray-700 p-10">
      <div className="md:px-2 pt-8 pb-5 flex items-center">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1">
        <div className="lg:col-span-1 col-span-1 bg-white lg:sticky lg:top-0 lg:py-4 lg:overflow-y-auto">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>
          <ul className="py-6 border-b space-y-6 px-8">
            <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src="https://bit.ly/3oW8yej"
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  Studio 2 Headphone
                </span>
                <span className="text-gray-400 text-sm inline-block pt-2">
                  Red Headphone
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">2 x €30.99</span>
                  <span className="text-pink-400 font-semibold inline-block">
                    €61.98
                  </span>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src="https://bit.ly/3lCyoSx"
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  Apple iPhone 13
                </span>
                <span className="text-gray-400 text-sm inline-block pt-2">
                  Phone
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">1 x €785</span>
                  <span className="text-pink-400 font-semibold inline-block">
                    €785
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-pink-500">€846.98</span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-pink-500">Free</span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>€846.98</span>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-1 space-y-8 px-12">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-gray-100 shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-yellow-500">
                <IoInformationCircleOutline />
              </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
              <IoIosClose />
            </div>
          </div>
          <div className="rounded-md">
            <form
              id="payment-form"
              method="POST"
              action=""
              onSubmit={submitHandler}
              className="rounded-lg"
            >
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping & Billing Information
                </h2>
                <div className="flex-col items-center justify-center mb-3 p-5 bg-gray-100 shadow-lg rounded text-gray-60 w-full">
                  <div className="w-full flex items-center">
                    <div className="w-1/2 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          First Name
                        </span>
                      </label>
                      <Input
                        id={firstName}
                        type={firstName}
                        name={firstName}
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        size="plain"
                      />
                    </div>

                    <div className="w-1/2 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          Last Name
                        </span>
                      </label>
                      <Input
                        id={lastName}
                        type={lastName}
                        name={lastName}
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        size="plain"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-center">
                    <div className="w-1/2 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          Email Address
                        </span>
                      </label>
                      <Input
                        id={email}
                        type={email}
                        name={email}
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="plain"
                      />
                    </div>

                    <div className="w-1/2 py-2 mb-1 mt-1 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          Mobile Number
                        </span>
                      </label>
                      <PhoneInput
                        country={"ph"}
                        flagIcon="globe"
                        value={mobile}
                        onChange={handlePhoneChange}
                        className="flex pl-3 pr-3"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-center">
                    <div className="w-1/2 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          Address
                        </span>
                      </label>
                      <Input
                        id={address}
                        type={address}
                        name={address}
                        placeholder="11 Maligaya St."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        size="plain"
                      />
                    </div>

                    <div className="w-1/2 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          City
                        </span>
                      </label>
                      <Input
                        id={city}
                        type={city}
                        nme={city}
                        placeholder="Manila"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="plain"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-center">
                    <div className="w-1/3 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          State
                        </span>
                      </label>
                      <Input
                        id={state}
                        type={state}
                        nme={state}
                        placeholder="Metro Manila"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="plain"
                      />
                    </div>
                    <div className="w-1/3 py-2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className=" h-12 justify-center items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          Zip Code
                        </span>
                      </label>
                      <Input
                        id={postalCode}
                        type={postalCode}
                        name={postalCode}
                        placeholder="Postal Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                      />
                    </div>

                    <div className="w-1/2 mb-2 mt-2 mr-2 rounded-lg border-gray-200 bg-white flex-col items-center justify-start">
                      <label className="flex justify-start items-center">
                        <span className="text-right px-2 text-xs text-gray-400 ml-1">
                          Country
                        </span>
                      </label>
                      <select
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="border-none p-3 bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                      >
                        <option value="AU">Australia</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MX">Mexico</option>
                        <option value="NL">Netherlands</option>
                        <option value="PH">Philippines</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="SG">Singapore</option>
                        <option value="ES">Spain</option>
                        <option value="TN">Tunisia</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US" selected="selected">
                          United States
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
          <Button classNameName="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
