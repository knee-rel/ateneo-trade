import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import Rating from "../components/Rating";
import ProductDetail from "../components/ProductDetail";
import Button from "../components/Button";
import Input from "../components/Input";
import products from "../products";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  const addToBasket = () => {
    console.log("testing button");
  };
  return (
    <div className="items-start p-5">
      <div className="flex items-center ">
        <FaAngleLeft />
        <Link to="/" className="my-3">
          Go Back
        </Link>
      </div>

      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="md:hidden">
          <img className="w-full" src={product.image} alt={product.name} />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            {product.gallery.map((image, index) => (
              <img
                key={index}
                alt={`tag-${index}`}
                className="w-1/4"
                src={image}
              />
            ))}
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {product.category}
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              {product.name}
            </h1>
            <div className="flex mt-2">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </div>
          <ProductDetail label="Price" value={`P${product.price}`} />
          <ProductDetail label="Condition" value={`${product.condition}/5`} />
          <ProductDetail
            label="Deal Options"
            value={`${product.dealOptions}`}
          />
          <ProductDetail
            label="Contact Number"
            value={product.contactInformation}
          />
          <p className="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 w-full">
            {product.description}
          </p>
          <div className="items-center justify-center w-3/4">
            <Button onClick={addToBasket} className="mt-4 w-1/2">
              Make an Offer
            </Button>
            <Input placeholder={product.price} className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
