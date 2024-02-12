import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";

import Rating from "../components/Rating";
import ProductDetail from "../components/ProductDetail";
import Button from "../components/Button";
import Input from "../components/Input";
import LoadingSpinner from "../components/LoadingSpinner";

import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart", { search: `qty=${qty}` });
  };

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  useEffect(() => {
    if (product && qty > product.countInStock) {
      setQty(product.stock);
    }
  }, [product, qty]);

  return (
    <div className="items-center">
      <div className="flex items-center p-5">
        <FaAngleLeft />
        <Link to="/" className="my-3">
          Go Back
        </Link>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <div className="items-start">
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
              <ProductDetail
                label="Condition"
                value={`${product.condition}/5`}
              />
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
              <div className="flex-col items-start justify-start">
                <div className="items-center justify-center mr-5">
                  <h1 className="mt-8">
                    Satisfied with current price? Make a purchase now!
                  </h1>
                  {product.countInStock > 0 ? (
                    <div className="flex items-center mt-2">
                      <label htmlFor="quantity" className="mr-2">
                        Quantity:
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={qty}
                        onChange={(e) => setQty(parseInt(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <p className="text-red-500">Out of stock</p>
                  )}
                  <Button
                    className="mt-2"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </div>

                <div className="items-center justify-center">
                  <h1 className="mt-8">
                    Not satisfied? Make a bargain by inputting your ideal price!
                  </h1>
                  {product.countInStock > 0 ? (
                    <div className="flex items-center mt-2">
                      <label htmlFor="quantity" className="mr-2">
                        Quantity:
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <p className="text-red-500">Out of stock</p>
                  )}
                  <div className="flex items-center justify-center">
                    <Button className="mt-2 w-1/2">Make an Offer</Button>
                    <Input placeholder={product.price} className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
