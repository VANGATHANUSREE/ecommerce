import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart = [], addToCart, removeFromCart, totalPrice } = useCart();

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.length > 0 ? (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center mb-4 shadow-sm p-3 bg-white rounded"
                  >
                    {/* Product Image */}
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      style={{
                        width: "100px",
                        height: "auto",
                        objectFit: "cover",
                        marginRight: "20px",
                      }}
                    />
                    {/* Product Details */}
                    <div style={{ flex: 1 }}>
                      <h5 className="mb-1">{item.productName}</h5>
                      <p className="mb-1">
                        ${item.price.toFixed(2)} x {item.quantity} ={" "}
                        <b>${(item.price * item.quantity).toFixed(2)}</b>
                      </p>
                    </div>
                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-light btn-sm me-2"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-light btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      {/* X Button to Remove Item */}
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => removeFromCart(item.id)} // Call removeFromCart on click
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center card">No Products are added to cart.</p>
            )}
          </div>
          {/* Cart Summary */}
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
              Card Summary
            </div>
            <div className="card-body">
              <p>Total Price: <b>${totalPrice.toFixed(2)}</b></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;