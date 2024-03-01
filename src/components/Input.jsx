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
    peer h-full w-full bg-transparent px-3 
    ? "text-sm sm:text-base placeholder-gray-600
    font-sans text-sm font-normal text-blue-gray-700 transition-all focus:outline-0 disabled:bg-blue-gray-50${
      size === "plain" ? " focus:outline-none px-3" : ""
    }
    ${
      size === "large"
        ? "text-sm sm:text-base placeholder-gray-800 pl-10 pr-4 rounded-lg focus:outline-none focus:border-blue-400"
        : ""
    }
    ${className || ""} // Append the custom className if provided
`.trim();

  return (
    <input
      {...props}
      id={id}
      type={type}
      name={name}
      className={inputClasses}
      placeholder={placeholder}
    />
  );
};

export default Input;
