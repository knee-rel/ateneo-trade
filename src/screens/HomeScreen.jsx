import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://api-atrade.onrender.com/api/products"
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
