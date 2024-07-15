// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h2 className="text-xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
