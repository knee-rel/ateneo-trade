import React from "react";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
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
  );
};

export default HomeScreen;
