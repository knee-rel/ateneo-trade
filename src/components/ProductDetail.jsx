import React from "react";

const ProductDetail = ({ label, value }) => {
  return (
    <div className="w-full py-4 border-b border-gray-200 flex items-center justify-between">
      <p className="text-base leading-4 text-gray-800 ">{label}</p>
      <div className="flex items-center justify-center">
        <p className="text-sm leading-none text-gray-600">{value}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
