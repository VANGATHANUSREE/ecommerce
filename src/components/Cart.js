// Cart.js
import React from 'react';

const Cart = () => {
  const cartItems = []; // Initially, no items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default Cart;