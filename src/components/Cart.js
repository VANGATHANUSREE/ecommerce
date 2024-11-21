import React from 'react';
import { useCart } from './CartContext'; // Use CartContext to access cart state

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  if (!cartItems) {
    return <div>Loading...</div>; // Handle case where cartItems might be undefined
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.productName} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total: ${totalPrice}</div>
    </div>
  );
};

export default Cart;