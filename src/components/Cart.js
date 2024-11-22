import React from 'react';
import { useCart } from './CartContext'; // Use CartContext to access cart state
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa'; // Import the X, +, and - icons from react-icons

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  // If cartItems is empty or undefined, show loading
  if (!cartItems) {
    return <div>Loading...</div>;
  }

  // Get the cart count (number of items in the cart)
  const cartCount = cartItems.length;

  // Handle quantity update
  const handleIncreaseQuantity = (id) => {
    updateQuantity(id, 1); // Increase quantity by 1
  };

  const handleDecreaseQuantity = (id) => {
    updateQuantity(id, -1); // Decrease quantity by 1 (make sure quantity doesn't go below 1)
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        {/* If cart is empty, show a message */}
        {cartCount === 0 ? (
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">
                No items are added in Cart
              </h6>
            </div>
          </div>
        ) : (
          // List of Cart Items
          <div className="card" style={{ width: '50%' }}>
            <ul className="list-group list-group-flush">
              {cartItems.map(item => (
                <li key={item.id} className="list-group-item d-flex align-items-center">
                  <img 
                    src={item.imgUrl} 
                    alt={item.productName} 
                    style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                  />
                  <span>{item.productName} - ${item.price}</span>

                  {/* Quantity Control */}
                  <div className="d-flex align-items-center ml-auto">
                    <button 
                      onClick={() => handleDecreaseQuantity(item.id)} 
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                    >
                      <FaMinus color="red" />
                    </button>
                    <span className="mx-2">{item.quantity}</span> {/* Display quantity */}
                    <button 
                      onClick={() => handleIncreaseQuantity(item.id)} 
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                    >
                      <FaPlus color="green" />
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '10px' }}
                  >
                    <FaTimes color="red" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cart Summary Card */}
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">
            Cart Summary
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Total: ${totalPrice}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
