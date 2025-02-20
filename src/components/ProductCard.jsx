import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
//
export function ProductCard({ product }) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  function handleClick() {
    setSelectedProduct(product.id);
    window.location.href = `/product/${
      selectedProduct ? selectedProduct : product.id
    }`;
  }

  return (
    // grid layout ca 12 cards after use pagination
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div
        className="max-w-sm flex flex-row"
        onClick={handleClick}
        // key={product.id}
      >
        <img
          src={product.image.url}
          alt={product.image?.alt}
          className="block h-48 w-48"
        />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountedPrice}</p>
        </div>
        {/* render only if review array has reviews */}
        {product.reviews.length > 0 && <ReviewCard product={product} />}
        {/* <ReviewCard product={product} /> */}
      </div>
      <button className="bg-blue-500" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button className="bg-red-500" onClick={() => removeFromCart(product)}>
        remove to Cart
      </button>
      <button
        className="bg-black text-white"
        onClick={() => clearCart(product)}
      >
        clear
      </button>
    </div>
  );
}

function ReviewCard({ product }) {
  // 0
  // :
  // {id: '47af5354-b3be-42aa-8780-503fcabe2f3e', username: 'Emma K.', rating: 5, description: "Love these earrings, they're so elegant and versatile."}
  return (
    <div>
      <h3>Reviews</h3>
      {product.reviews.map(review => {
        return (
          <div key={review.id}>
            <p>{review.username}</p>
            <p>{review.rating}</p>
            <p>{review.description}</p>
          </div>
        );
      })}
    </div>
  );
}
