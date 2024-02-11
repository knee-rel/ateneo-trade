import React from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <div className="flex-col w-full justify-center items-center p-10">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <div className="flex-col w-full justify-center p-10">
          <h1 className="text-amber-500 font-bold text-3xl">
            Ateneo Trade Products
          </h1>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div key={product._id}>
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
