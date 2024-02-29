import React from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";

import CarouselElement from "../components/Carousel";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <div className="flex-col w-full justify-center items-center lg:p-10 p-5 bg-white dark:bg-[#1d2130]">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <div className="flex-col w-full justify-center items-center">
          <CarouselElement />
          <h1 className="text-gray-800 dark:text-white pt-3 font-bold text-3xl text-center mt-6">
            Ateneo Trade Products
          </h1>
          <div className="flex flex-wrap items-center justify-center mt-4">
            {products.map((product) => (
              <div key={product._id} className="m-4">
                <div>
                  <Product product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
