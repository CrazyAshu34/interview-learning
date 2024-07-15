// src/pages/Cart.js
import React from 'react';

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, total }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-700">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-red-500 text-white p-2 rounded">-</button>
                <span className="mx-4">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 text-white p-2 rounded">+</button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
