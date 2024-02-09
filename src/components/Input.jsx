import React from "react";

const Input = ({ placeholder, className, ...props }) => {
  const inputClasses = `
  peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5
  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all
  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0
  disabled:border-0 disabled:bg-blue-gray-50
  ${className || ""}  // Append the custom className if provided
`;
  return (
    <input
      {...props}
      className={inputClasses.trim()}
      placeholder={placeholder}
    />
  );
};

export default Input;
