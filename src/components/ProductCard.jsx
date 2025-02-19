import React, { useState } from 'react';

export function ProductCard({ product }) {
  const [selectedProduct, setSelectedProduct] = useState('');

  function handleClick() {
    console.log(product.id);
    setSelectedProduct(product.id);
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
