import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../Assets/products'; // Adjust the import path as necessary
import { useCart } from './CartContext'; // Import the CartContext

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find(item => item.id === id); // Find the product by ID
  const { addToCart } = useCart(); // Get the addToCart function from context
  const [quantity, setQuantity] = useState(1); // Local state for quantity

  if (!product) {
    return <div className="container">Product not found</div>; // Handle case where product is not found
  }

  // Filter for similar products in the same category, excluding the current product
  const similarProducts = products.filter(
    item => item.category === product.category && item.id !== product.id
  );

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.productName, price: product.price, quantity });
  };

  return (
    <>
      <div className="container">
        <h1>{product.productName}</h1>
        <img src={product.imgUrl} alt={product.productName} style={{ height: '500px', width: '75%' }} />
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discount}% OFF</p>
        <p>Description: {product.description}</p>
        <p>Average Rating: {product.avgRating}</p>

        {/* Quantity selection */}
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: '60px', marginLeft: '10px' }}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      <div className="container">
        <h2 className="text-center">Similar Products</h2>
        <div className="row">
          {similarProducts.length > 0 ? (
            similarProducts.map(similarProduct => (
              <div key={similarProduct.id} className="col-md-4">
                <div className="product-card">
                  <Link to={`/product/${similarProduct.id}`}>
                    <img
                      src={similarProduct.imgUrl}
                      alt={similarProduct.productName}
                      className="img-fluid product-image"
                    />
                  </Link>

                  <h3>{similarProduct.productName}</h3>
                  <p>Price: ${similarProduct.price}</p>
                  <p>Discount: {similarProduct.discount}% OFF</p>
                  <p>Rating: {similarProduct.avgRating}</p>
                  <Link to={`/product/${similarProduct.id}`}>
                    <button className="btn btn-primary">View Product</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No similar products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;