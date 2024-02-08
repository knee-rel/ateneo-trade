import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="mx-auto p-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={product.image}
            alt="product"
          />
          <div>
            <div className="my-6 flex items-center justify-between px-4">
              <Link to={`/product/${product._id}`}>
                <p className="font-bold text-gray-500">{product.name}</p>
              </Link>

              <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                $120
              </p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="text-sm font-semibold text-gray-500">
                First option
              </p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                P{product.price}
              </p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="text-sm font-semibold text-gray-500">
                Second option
              </p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                7
              </p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="text-sm font-semibold text-gray-500">
                Third option
              </p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                1
              </p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="text-sm font-semibold text-gray-500">
                Fourth option
              </p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                23
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
