import React from "react";

const Input = ({
  size = "small",
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  ...props
}) => {
  const inputClasses = `
  peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5
    font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all
    placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
    focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0
    disabled:border-0 disabled:bg-blue-gray-50${
      size === "plain" ? "focus:outline-none px-3" : ""
    }
    ${
      size === "large"
        ? "text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
        : ""
    }
    ${className || ""} // Append the custom className if provided
`;
  return (
    <input
      {...props}
      id={id}
      type={type}
      name={name}
      className={inputClasses.trim()}
      placeholder={placeholder}
    />
  );
};

export default Input;
