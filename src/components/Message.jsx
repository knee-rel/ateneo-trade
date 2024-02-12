import React from "react";

const Message = ({ variant, children, className }) => {
  const variantClasses = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-800",
    success: "bg-success-100 text-success-700",
    danger: "bg-danger-100 text-danger-700",
    warning: "bg-warning-100 text-warning-800",
    info: "bg-info-100 text-info-800",
    indigo: "bg-indigo-100 text-indigo-800",
    light: "bg-neutral-50 text-neutral-600",
    dark: "bg-neutral-800 text-neutral-50 dark:bg-neutral-900",
  };

  //determining the class based on the variant prop
  const alertClass = variantClasses[variant] | "";
  return (
    <div
      className={`mb-3 inline-flex w-full items-center rounded-lg px-6 py-5 text-base ${alertClass} ${className}`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Message;
