import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumbs = ({ breadcrumbs }) => {
  const currentPath = useLocation().pathname;

  return (
    <nav className="flex items-center" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="text-gray-500 mx-1">
                <MdKeyboardArrowRight />
              </span>
            )}
            {breadcrumb.url && currentPath !== breadcrumb.url ? (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                {breadcrumb.icon && (
                  <span className="me-2.5">{breadcrumb.icon}</span>
                )}
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                to={breadcrumb.url}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {breadcrumb.icon && (
                  <span className="me-2.5">{breadcrumb.icon}</span>
                )}
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
