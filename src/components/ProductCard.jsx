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
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm hover:shadow-lg hover:border-blue-3 transition  transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-y-2">
      <div
        className="max-w-sm grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer"
        onClick={handleClick}
        // key={product.id}
      >
        <div>
          <img
            src={product.image.url}
            alt={product.image?.alt}
            className="object-cover rounded-lg aspect-square"
          />
        </div>
        <div className="flex flex-col pl-4 border-l-2 border-blue-3">
          <h5>{product.title}</h5>
          <p>{product.description}</p>
        </div>
        {/* render only if review array has reviews */}
        {/* {product.reviews.length > 0 && <ReviewCard product={product} />} */}
        {/* <ReviewCard product={product} /> */}
      </div>

      {product.discountedPrice < product.price ? (
        <div className="flex gap-2">
          <div>
            {' '}
            <p className="line-through">{product.price} </p>
            <p>{product.discountedPrice} nok</p>
          </div>
          <p>
            Save {Number(product.price - product.discountedPrice).toFixed(2)}{' '}
            nok
          </p>
        </div>
      ) : (
        <p>{product.price} nok</p>
      )}
      {/*test buttons */}
      <button className="bg-blue-3" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      {/* <button className="bg-red-500" onClick={() => removeFromCart(product)}>
        remove to Cart
      </button>
      <button
        className="bg-black text-white"
        onClick={() => clearCart(product)}
      >
        clear
      </button> */}
      {/*  */}
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
