import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
